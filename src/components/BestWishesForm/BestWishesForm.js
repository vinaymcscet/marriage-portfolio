import React, { useRef, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import emailjs from '@emailjs/browser';
import './BestWishesForm.css';
import { enteredEmail, enteredOnlyNumber, isEmpty, isThreeChars, numberValidation, userAPI_For_Firebase } from '../../Settings/Settings';


const BestWishesForm = () => {
    const form = useRef();

    const [NameValidate, setnamevalidate] = useState(false);
    const [emailValidate, setEmailValidate] = useState(false);
    const [emailTypeValidate, setEmailTypeValidate] = useState(false);
    const [phoneValidate, setPhoneValidate] = useState(false);
    const [phoneNumberTypeValidation, setPhoneNumberTypeValidation] = useState(false);
    const [textAreaValidate, setTextAreaValidate] = useState(false);

    const [userData, setUserData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    let name, value;
    const getUserData = (event) => {
        name = event.target.name;
        value = event.target.value;
        setUserData({ ...userData, [name]: value });

        let emptyName, threeCharsName;
        if (userData.name !== '') {
            emptyName = isEmpty(userData.name);
            threeCharsName = isThreeChars(userData.name);
            if (emptyName || threeCharsName)
                setnamevalidate(true);
            else
                setnamevalidate(false);
        }

        let emptyEmail, threeCharsEmail, emailCheck;
        if (userData.email !== '') {
            emptyEmail = isEmpty(userData.email);
            threeCharsEmail = isThreeChars(userData.email);
            emailCheck = enteredEmail(userData.email);
            if (emptyEmail || threeCharsEmail)
                setEmailValidate(true);
            else
                setEmailValidate(false);
            if (!emailCheck)
                setEmailTypeValidate(true);
            else
                setEmailTypeValidate(false);
        }

        let emptyPhone, threeCharsPhone, phoneTypeValidation, enteredOnlyNumbervalidation;
        if (userData.phone !== '') {
            emptyPhone = isEmpty(userData.phone);
            threeCharsPhone = isThreeChars(userData.phone);
            phoneTypeValidation = numberValidation(userData.phone);
            enteredOnlyNumbervalidation = enteredOnlyNumber(userData.phone);
            if (emptyPhone || threeCharsPhone)
                setPhoneValidate(true);
            else
                setPhoneValidate(false);

            if (!phoneTypeValidation)
                setPhoneNumberTypeValidation(true);
            else
                setPhoneNumberTypeValidation(false);

            if (enteredOnlyNumbervalidation)
                setUserData({ ...userData, [name]: value });
        }

        let emptyTextArea, threeCharsTextArea;
        if (userData.message !== '') {
            emptyTextArea = isEmpty(userData.message);
            threeCharsTextArea = isThreeChars(userData.message);
            if (emptyTextArea || threeCharsTextArea)
                setTextAreaValidate(true);
            else
                setTextAreaValidate(false);
        }
    }

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        const isNameEmpty = isEmpty(userData.name);
        const isNameThreeChars = isThreeChars(userData.name);
        const isEmailEmpty = isEmpty(userData.email);
        const isEmailThreeChars = isThreeChars(userData.email);
        const isEmailTypeCheck = enteredEmail(userData.email);
        const isPhoneEmpty = isEmpty(userData.phone);
        const isPhoneThreeChars = isThreeChars(userData.phone);
        const isPhoneNumberValidate = numberValidation(userData.phone);
        const isPhoneOnlyNumber = enteredOnlyNumber(userData.phone);
        const isTextAreaEmpty = isEmpty(userData.message);
        const isTextAreaThreeChars = isThreeChars(userData.message);

        const { name, email, phone, message } = userData;

        if (!isNameEmpty || !isNameThreeChars)
            setnamevalidate(false)
        else
            setnamevalidate(true);
        if (!isEmailEmpty || !isEmailThreeChars)
            setEmailValidate(false)
        else
            setEmailValidate(true);
        if (!isEmailTypeCheck)
            setEmailTypeValidate(true);
        else
            setEmailTypeValidate(false);
        if (isPhoneEmpty || isPhoneThreeChars)
            setPhoneValidate(true);
        else
            setPhoneValidate(false);
        if (!isPhoneNumberValidate)
            setPhoneNumberTypeValidation(true);
        else
            setPhoneNumberTypeValidation(false);

        if (!isTextAreaEmpty || !isTextAreaThreeChars)
            setTextAreaValidate(false)
        else
            setTextAreaValidate(true);

        if (!isPhoneOnlyNumber)
            setUserData({ ...userData, [name]: value });

        if (name && email && phone && message) {
            // Firebase API Integration
            const resp = await fetch(userAPI_For_Firebase, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name,
                    email,
                    phone,
                    message
                }),
            });
            console.log("firebase response", resp);
            // End
            // Email JS API for sending email
            // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
            emailjs.sendForm('service_lgayh0m', 'template_qaxzwdq', form.current, '4yGYuQlJo-5JPbNW8')
                .then((result) => {
                    toast.success("Send Successfully!", {
                        position: toast.POSITION.TOP_RIGHT,
                        className: "toast-notify-form",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                    });
                    setUserData({
                        name: '',
                        email: '',
                        phone: '',
                        message: ''
                    })
                }, (error) => {
                    toast.error('Server error', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                });
            event.target.reset();
        } else {
            toast.error('please fill all the data', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    }
    return (
        <div className='wishesForm'>
            <form onSubmit={onSubmitHandler} method={"POST"} ref={form}>
                <Row>
                    <Col sm={12} md={6} lg={6} xl={6}>
                        <div className="form-control">
                            <input
                                type="text"
                                name="name"
                                placeholder="Full Name"
                                className={NameValidate ? 'error input-group' : 'input-group'}
                                value={userData.name}
                                autoComplete="off"
                                autoFocus="off"
                                onChange={getUserData}
                            />
                            {NameValidate === true ? <p><span><img src="images/content/hand-finger-right-icon.svg" alt="Right Sign" /></span>Field cannot be empty and cannot be lesser than 3 characters.</p> : ''}
                        </div>
                        <div className="form-control">
                            <input
                                type="text"
                                name="email"
                                placeholder="Email"
                                className={(emailValidate || emailTypeValidate) ? 'error input-group' : 'input-group'}
                                value={userData.email}
                                autoComplete="off"
                                autoFocus="off"
                                onChange={getUserData}
                            />
                            {emailValidate === true ? <p><span><img src="images/content/hand-finger-right-icon.svg" alt="Right Sign" /></span>Field cannot be empty and cannot be lesser than 3 characters.</p> : ''}
                            {emailTypeValidate === true ? <p><span><img src="images/content/hand-finger-right-icon.svg" alt="Right Sign" /></span>Enter valid Email Id.</p> : ''}
                        </div>
                        <div className="form-control">
                            <input
                                type="text"
                                name="phone"
                                placeholder="Phone"
                                value={userData.phone}
                                autoComplete="off"
                                autoFocus="off"
                                className={(phoneValidate || phoneNumberTypeValidation) ? 'error input-group' : 'input-group'}
                                onChange={getUserData}
                            />
                            {phoneValidate === true ? <p><span><img src="images/content/hand-finger-right-icon.svg" alt="Right Sign" /></span>Field cannot be empty and cannot be lesser than 3 characters.</p> : ''}
                            {phoneNumberTypeValidation === true ? <p><span><img src="images/content/hand-finger-right-icon.svg" alt="Right Sign" /></span>only numbers and 10 digits are allowed</p> : ''}
                        </div>
                    </Col>
                    <Col sm={12} md={6} lg={6} xl={6}>
                        <div className="form-control">
                            <textarea
                                rows={7}
                                name="message"
                                placeholder='Message'
                                value={userData.message}
                                autoComplete="off"
                                autoFocus="off"
                                className={textAreaValidate ? 'error input-group' : 'input-group'}
                                onChange={getUserData}
                            ></textarea>
                            {textAreaValidate === true ? <p><span><img src="images/content/hand-finger-right-icon.svg" alt="Right Sign" /></span>Field cannot be empty and cannot be lesser than 3 characters.</p> : ''}
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12} md={12} lg={12} xl={12}>
                        <div className="wd_btn">
                            <Button variant="primary" className="submitForm" type="submit">Send a Wishes</Button>
                        </div>
                    </Col>
                </Row>
            </form>
            <ToastContainer />
        </div>
    )
};

export default BestWishesForm;
