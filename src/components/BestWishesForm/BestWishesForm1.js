import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import './BestWishesForm.css';

const isEmpty = value => value.trim() === '';
const isThreeChars = value => value.trim().length <= 3;
const numberValidation = value => (/^\d{10}$/).test(value);
const enteredOnlyNumber = value => (/^[0-9\b]+$/).test(value);
const enteredEmail = value => (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/).test(value);

const BestWishesForm = () => {
    const [NameValidate, setnamevalidate] = useState(false);
    const [emailValidate, setEmailValidate] = useState(false);
    const [emailTypeValidate, setEmailTypeValidate] = useState(false);
    const [phoneValidate, setPhoneValidate] = useState(false);
    const [phoneNumberTypeValidation, setPhoneNumberTypeValidation] = useState(false);
    const [textAreaValidate, setTextAreaValidate] = useState(false);

    const [nameValue, setNameValue] = useState("");
    const [emailValue, setEmailValue] = useState("");
    const [phoneValue, setPhoneValue] = useState("");
    const [textareaValue, setTextAreaValue] = useState("");
    const [finalUserRecord, setFinalUserRecord] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    })

    const inputNameHandler = (e) => {
        const targetvalue = e.target.value;
        const emptyName = isEmpty(targetvalue);
        const threeCharsName = isThreeChars(targetvalue);

        setNameValue(targetvalue);

        if (emptyName || threeCharsName)
            setnamevalidate(true);
        else
            setnamevalidate(false);
    }
    const inputEmailHandler = (e) => {
        const targetvalue = e.target.value;
        const emptyEmail = isEmpty(targetvalue);
        const threeCharsEmail = isThreeChars(targetvalue);
        const emailCheck = enteredEmail(targetvalue);

        setEmailValue(targetvalue);

        if (emptyEmail || threeCharsEmail)
            setEmailValidate(true);
        else
            setEmailValidate(false);
        if (!emailCheck)
            setEmailTypeValidate(true);
        else
            setEmailTypeValidate(false);

    }
    const inputPhoneHandler = (e) => {
        console.log(e);
        const targetvalue = e.target.value;
        const emptyPhone = isEmpty(targetvalue);
        const threeCharsPhone = isThreeChars(targetvalue);
        const phoneNumberTypeValidation = numberValidation(targetvalue);
        const enteredOnlyNumbervalidation = enteredOnlyNumber(targetvalue);

        if (emptyPhone || threeCharsPhone)
            setPhoneValidate(true);
        else
            setPhoneValidate(false);

        if (!phoneNumberTypeValidation)
            setPhoneNumberTypeValidation(true);
        else
            setPhoneNumberTypeValidation(false);

        if (enteredOnlyNumbervalidation)
            setPhoneValue(targetvalue);
    }
    const inputTextareaHandler = (e) => {
        const targetvalue = e.target.value;
        const emptyTextArea = isEmpty(targetvalue);
        const threeCharsTextArea = isThreeChars(targetvalue);

        setTextAreaValue(targetvalue);

        if (emptyTextArea || threeCharsTextArea)
            setTextAreaValidate(true);
        else
            setTextAreaValidate(false);
    }

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        const isNameEmpty = isEmpty(nameValue);
        const isNameThreeChars = isThreeChars(nameValue);
        const isEmailEmpty = isEmpty(emailValue);
        const isEmailThreeChars = isThreeChars(emailValue);
        const isEmailTypeCheck = enteredEmail(emailValue);
        const isPhoneEmpty = isEmpty(phoneValue);
        const isPhoneThreeChars = isThreeChars(phoneValue);
        const isPhoneNumberValidate = numberValidation(phoneValue);
        const isPhoneOnlyNumber = enteredOnlyNumber(phoneValue);
        const isTextAreaEmpty = isEmpty(textareaValue);
        const isTextAreaThreeChars = isThreeChars(textareaValue);

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
        if (!isPhoneEmpty || !isPhoneThreeChars)
            setPhoneValidate(false);
        else
            setPhoneValidate(true);
        if (!isPhoneNumberValidate)
            setPhoneNumberTypeValidation(true);
        else
            setPhoneNumberTypeValidation(false);
        if (!isPhoneOnlyNumber)
            setPhoneNumberTypeValidation(true);
        if (!isTextAreaEmpty || !isTextAreaThreeChars)
            setTextAreaValidate(false)
        else
            setTextAreaValidate(true);

        console.log(nameValue, emailValue, phoneValue, textareaValue);
        setFinalUserRecord({
            name: nameValue,
            email: emailValue,
            phone: phoneValue,
            message: textareaValue
        });

        const { name, email, phone, message } = finalUserRecord;
        if (name && email && phone && message) {
            const resp = await fetch('https://wedding-contacts-b4c58-default-rtdb.firebaseio.com/weddingcontacts.json', {
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
            if (resp) {
                setFinalUserRecord({
                    name: '',
                    email: '',
                    phone: '',
                    message: ''
                });
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
            }
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
            <form onSubmit={onSubmitHandler}>
                <Row>
                    <Col sm={12} md={6} lg={6} xl={6}>
                        <div className="form-control">
                            <input
                                type="text"
                                name="full name"
                                placeholder="Full Name"
                                className={NameValidate ? 'error input-group' : 'input-group'}
                                value={nameValue}
                                onChange={inputNameHandler}
                            />
                            {NameValidate === true ? <p><span><img src="images/content/hand-finger-right-icon.svg" alt="Right Sign" /></span>Field cannot be empty and cannot be lesser than 3 characters.</p> : ''}
                        </div>
                        <div className="form-control">
                            <input
                                type="text"
                                name="email"
                                placeholder="Email"
                                className={emailValidate ? 'error input-group' : 'input-group'}
                                value={emailValue}
                                onChange={inputEmailHandler}
                            />
                            {emailValidate === true ? <p><span><img src="images/content/hand-finger-right-icon.svg" alt="Right Sign" /></span>Field cannot be empty and cannot be lesser than 3 characters.</p> : ''}
                            {emailTypeValidate === true ? <p><span><img src="images/content/hand-finger-right-icon.svg" alt="Right Sign" /></span>Enter valid Email Id.</p> : ''}
                        </div>
                        <div className="form-control">
                            <input
                                type="text"
                                name="phone"
                                placeholder="Phone"
                                value={phoneValue}
                                className={phoneValidate || phoneNumberTypeValidation ? 'error input-group' : 'input-group'}
                                onChange={inputPhoneHandler}
                            />
                            {phoneValidate === true ? <p><span><img src="images/content/hand-finger-right-icon.svg" alt="Right Sign" /></span>Field cannot be empty and cannot be lesser than 3 characters.</p> : ''}
                            {phoneNumberTypeValidation === true ? <p><span><img src="images/content/hand-finger-right-icon.svg" alt="Right Sign" /></span>Type only numbers and only 10 digits are allowed</p> : ''}
                        </div>
                    </Col>
                    <Col sm={12} md={6} lg={6} xl={6}>
                        <div className="form-control">
                            <textarea
                                rows={7}
                                name="message"
                                placeholder='Message'
                                value={textareaValue}
                                className={textAreaValidate ? 'error input-group' : 'input-group'}
                                onChange={inputTextareaHandler}
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
