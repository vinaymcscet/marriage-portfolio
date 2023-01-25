import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CountdownTimer from '../CountdownTimer/CountdownTimer';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import GalleryModal from '../../modal/GalleryModal';
import './Home.css';

import {
    gallerySlider,
    guestSettings,
    testimonialSettings,
    GalleryData,
    testimonials,
    socialLinks,
    web_content,
    guest_slider
} from '../../Settings/Settings';

const Home = () => {
    const [showModal, setShowModal] = useState(false);
    const [sendResponse, setSendResponse] = useState([]);
    const ScrollSection = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    useEffect(() => {
        ScrollSection();
        return () => {
            ScrollSection();
        };
    }, []);
    const ScrollInvitationSection = () => {
        window.scrollTo({
            top: 800,
            behavior: 'smooth'
        });
    };

    const galleryResponse = GalleryData.map((wrapperData, index) => (
        <div key={index}>
            <Row>
                <Col sm={12} md={6} lg={6} xl={6}>
                    {
                        wrapperData?.token[0]?.zoom_image?.map((data, index) => (
                            <div className="wd_gallery_slide" key={index}>
                                <img src={data.image} alt={data.alt_image} />
                                <div className="ast_glr_overlay">
                                    <p>{data.descprition}</p>
                                    <Link title={data.title} onClick={() => openGalleryModal(data)}><i className={data.iconClass} aria-hidden="true"></i></Link>
                                </div>
                            </div>
                        ))
                    }
                </Col>
                <Col sm={12} md={6} lg={6} xl={6}>
                    {
                        wrapperData?.token[0]?.small_image?.map((data, index) => (
                            <div className="wd_gallery_slide" key={index}>
                                <img src={data.image} alt={data.alt_image} />
                                <div className="ast_glr_overlay">
                                    <p>{data.descprition}</p>
                                    <Link title={data.title} onClick={() => openGalleryModal(data)}><i className={data.iconClass} aria-hidden="true"></i></Link>
                                </div>
                            </div>
                        ))
                    }
                </Col>
            </Row>
        </div>
    ));

    const openGalleryModal = (response) => {
        setShowModal(true);
        setSendResponse(response);
    }

    const date1 = new Date("02/22/2023");
    const date2 = new Date();
    const Difference_In_Time = date1.getTime() - date2.getTime();
    const Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

    const DAYS_LEFT_IN_MS = Math.round(Difference_In_Days) * 24 * 60 * 60 * 1000;
    // const DAYS_LEFT_IN_MS = 1 * 24 * 60 * 60 * 1000;
    const NOW_IN_MS = new Date().getTime();

    const dateTimeAfterDaysLeft = NOW_IN_MS + DAYS_LEFT_IN_MS;

    return (
        <div>
            <div className='scroll_wrapper'>
                <div className="scroll_slider_wrapper">
                    <div id="snow"></div>
                    <div className="scroll_slider_textInfo">
                        <img src={web_content[0].header_name[0].name} alt={web_content[0].header_name[0].alt_text} className="img-responsive" />
                        <h3>{web_content[0].shadi_date}</h3>
                        <h1>{web_content[0].save_date}</h1>
                        <div className="clearfix"></div>
                        <img src={web_content[0].heading[0].name} alt={web_content[0].heading[0].alt_text} className="img-responsive" />
                    </div>
                    <div className="scroll_slider_index_menu_down">
                        <ul>
                            <li className="active">
                                <button id="headbottom" onClick={ScrollInvitationSection}>
                                    <i className="fa fa-long-arrow-down" aria-hidden="true"></i>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='scroll_about_wrapper toppadder90 bottompadder70'>
                <Container>
                    <Row>
                        <Col sm={12} md={12} lg={12} xl={12}>
                            <div className="wd_heading wow fadeInDown" data-wow-delay="0.3s">
                                <h4>{web_content[0].getting_married}</h4>
                                <h1>{web_content[0].groom_bride}</h1>
                                <img src={web_content[0].heading[0].name} alt={web_content[0].heading[0].alt_text} className="img-responsive" />
                            </div>
                        </Col>
                        <Col sm={12} md={12} lg={12} xl={12}>
                            <Row>
                                <Col sm={{ span: 12, order: 1 }} md={{ span: 4, order: 1 }} lg={{ span: 4, order: 1 }} xl={{ span: 4, order: 1 }}>
                                    <div className="wd_about_infobox toppadder20">
                                        <div className="wd_about_infobox_img">
                                            <span><img src={web_content[0].line_name[0].name} alt={web_content[0].line_name[0].alt_text} className="img-responsive" /></span>
                                            <img src={web_content[0].groom[0].name} alt={web_content[0].groom[0].alt_text} className="img-responsive" />
                                        </div>
                                        <h2>{web_content[0].groom_name}</h2>
                                        <p>({web_content[0].groom_parents})</p>
                                        <ul>
                                            <li><Link onClick={() => { window.open(socialLinks[0].groom.facebook, "_blank") }} ><i className="fa fa-facebook" aria-hidden="true"></i></Link></li>
                                            <li><Link onClick={() => { window.open(socialLinks[0].groom.twitter, "_blank") }}><i className="fa fa-twitter" aria-hidden="true"></i></Link></li>
                                            <li><Link onClick={() => { window.open(socialLinks[0].groom.instagram, "_blank") }}><i className="fa fa-instagram" aria-hidden="true"></i></Link></li>
                                        </ul>
                                    </div>
                                </Col>
                                <Col sm={{ span: 12, order: 2 }} md={{ span: 4, order: 3 }} lg={{ span: 4, order: 3 }} xl={{ span: 4, order: 3 }}>
                                    <div className="wd_about_infobox toppadder20">
                                        <div className="wd_about_infobox_img">
                                            <span><img src={web_content[0].line_name[0].name} alt={web_content[0].line_name[0].alt_text} className="img-responsive" /></span>
                                            <img src={web_content[0].bride[0].name} alt={web_content[0].bride[0].alt_text} className="img-responsive" />
                                        </div>
                                        <h2>{web_content[0].bride_name}</h2>
                                        <p>({web_content[0].bride_parents})</p>
                                        <ul>
                                            <li><Link onClick={() => { window.open(socialLinks[0].bride.facebook, "_blank") }} ><i className="fa fa-facebook" aria-hidden="true"></i></Link></li>
                                            <li><Link onClick={() => { window.open(socialLinks[0].bride.twitter, "_blank") }}><i className="fa fa-twitter" aria-hidden="true"></i></Link></li>
                                            <li><Link onClick={() => { window.open(socialLinks[0].bride.instagram, "_blank") }}><i className="fa fa-instagram" aria-hidden="true"></i></Link></li>
                                        </ul>
                                    </div>
                                </Col>
                                <Col sm={{ span: 12, order: 3 }} md={{ span: 4, order: 2 }} lg={{ span: 4, order: 2 }} xl={{ span: 4, order: 2 }}>
                                    <div className="wd_about_infobox">
                                        <h1>{web_content[0].invite}</h1>
                                        <div className="wd_about_infobox_date">
                                            <p>{web_content[0].invite_message}</p>
                                            <h3>{web_content[0].shadi_day}</h3>
                                            <h2>{web_content[0].shadi_date}</h2>
                                            <p>At {web_content[0].shadi_guest_house}</p>
                                        </div>
                                        <div className="wd_btn wd_single_index_menu_rsvp">
                                            <Link to="/" className="">{web_content[0].rsvp}</Link>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col sm={12} md={12} lg={12} xl={12}>
                            <div className="timer_wrapper">
                                <div className="center_words">
                                    <h4>{web_content[0].clock_title}</h4>
                                </div>
                            </div>
                            <div id="clockDiv">
                                <CountdownTimer targetDate={dateTimeAfterDaysLeft} />
                            </div>
                            <div className="center_words">
                                <h4>{web_content[0].center_title}</h4>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="guest_wrapper toppadder90">
                <div className="overlay"></div>
                <Container>
                    <Row>
                        <Col sm={12} md={12} lg={12} xl={12}>
                            <div className="wd_heading wow fadeInDown" data-wow-delay="0.3s">
                                <h4>{web_content[0].rsvp}</h4>
                                <h1>{web_content[0].guest_title}</h1>
                                <img src={web_content[0].heading[0].name} alt={web_content[0].heading[0].alt_text} className="img-responsive" />
                            </div>
                        </Col>
                        <Col sm={12} md={12} lg={12} xl={12}>
                            <div className="guest_infobox">
                                <h2>{web_content[0].invitation_message[0].invited}<span>{web_content[0].invitation_message[0].couple_name}</span> {web_content[0].invitation_message[0].wedding}</h2>
                                <h4>{web_content[0].rsvp_message}</h4>
                                <p>{web_content[0].guest_message}</p>
                                <h2><span>{web_content[0].gift_registry}</span></h2>
                                <p>{web_content[0].wedding_message}</p>
                            </div>
                        </Col>
                        <Col sm={{ span: 12, offset: 0 }} md={{ span: 8, offset: 2 }} lg={{ span: 8, offset: 2 }} xl={{ span: 8, offset: 2 }}>
                            <div className="guest_slider">
                                <Slider {...guestSettings}>
                                    {guest_slider.map((data, index) => (
                                        <div key={index}>
                                             <img src={data.name} alt={data.alt_text}
                                            className="img-responsive" />
                                        </div>
                                    ))}
                                    {guest_slider.map((data, index) => (
                                        <div key={index}>
                                             <img src={data.name} alt={data.alt_text}
                                            className="img-responsive" />
                                        </div>
                                    ))}
                                    {guest_slider.map((data, index) => (
                                        <div key={index}>
                                             <img src={data.name} alt={data.alt_text}
                                            className="img-responsive" />
                                        </div>
                                    ))} 
                                </Slider>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="event_wrapper toppadder90">
                <Container>
                    <Row>
                        <Col sm={12} md={12} lg={12} xl={12}>
                            <div className="wd_heading wow fadeInDown" data-wow-delay="0.3s">
                                <h4>{web_content[0].ceremony}</h4>
                                <h1>{web_content[0].wedding_event}</h1>
                                <img src={web_content[0].heading[0].name} alt={web_content[0].heading[0].alt_text} className="img-responsive" />
                            </div>
                        </Col>
                        <Col sm={12} md={12} lg={12} xl={12}>
                            <Row>
                                <Row>
                                    <Col sm={{ span: 12, order: 1 }} md={{ span: 4, order: 1 }} lg={{ span: 4, order: 1 }} xl={{ span: 4, order: 1 }}>
                                        <div className="wd_event_infobox">
                                            <h2>{web_content[0].main_ceremony}</h2>
                                            <span>{web_content[0].shadi_date}</span>
                                            <h1>{web_content[0].shadi_time}</h1>
                                            <span>{web_content[0].guest_house_address}</span>
                                            <p>{web_content[0].guest_house_description}</p>
                                            <div className="clearfix"></div>
                                            <Link onClick={() => { window.open(socialLinks[0].bride.guesthouse, "_blank") }}><img src="images/content/map.png" alt="Map" className="img-responsive" /></Link>
                                        </div>
                                    </Col>
                                    <Col sm={{ span: 12, order: 2 }} md={{ span: 4, order: 3 }} lg={{ span: 4, order: 3 }} xl={{ span: 4, order: 3 }}>
                                        <div className="wd_event_infobox">
                                            <h2>{web_content[0].wedding_party}</h2>
                                            <span>{web_content[0].reception_date}</span>
                                            <h1>{web_content[0].reception_time}</h1>
                                            <span>{web_content[0].reception_address}</span>
                                            <p>{web_content[0].reception_hall_description}</p>
                                            <div className="clearfix"></div>
                                            <Link onClick={() => { window.open(socialLinks[0].groom.guesthouse, "_blank") }}><img src="images/content/map.png" alt="Map" className="img-responsive" /></Link>
                                        </div>
                                    </Col>
                                    <Col sm={{ span: 12, order: 3 }} md={{ span: 4, order: 2 }} lg={{ span: 4, order: 2 }} xl={{ span: 4, order: 2 }}>
                                        <div className="wd_event_infobox">
                                            <img src={web_content[0].event_img[0].name} alt={web_content[0].event_img[0].alt_text} />
                                            <div className="wd_btn wd_single_index_menu_rsvp">
                                                <Link to="/" className="active">{web_content[0].rsvp}</Link>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="testimonial_wrapper toppadder70 bottompadder70">
                <Container>
                    <Row>
                        <Col sm={12} md={12} lg={12} xl={12}>
                            <div className="testimonial_slider">
                                <Slider {...testimonialSettings}>
                                    {testimonials.map((data, index) => (
                                        <div key={index}>
                                            <img src={data.image} alt={data.alt} />
                                            <p>{data.description}</p>
                                            <h4>{data.name}</h4>
                                        </div>
                                    ))}
                                </Slider>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="gallery_wrapper toppadder70 bottompadder70">
                <Container>
                    <Row>
                        <Col sm={12} md={12} lg={12} xl={12}>
                            <div className="wd_heading wow fadeInDown" data-wow-delay="0.3s">
                                <h4>{web_content[0].invitation_message[0].couple_name}</h4>
                                <h1>{web_content[0].invitation_message[0].gallery}</h1>
                                <img src={web_content[0].heading[0].name} alt={web_content[0].heading[0].alt_text} className="img-responsive" />
                            </div>
                        </Col>
                        <Col sm={12} md={12} lg={12} xl={12}>
                            <div className="gallery_slider popup-gallery">
                                <Slider {...gallerySlider}>
                                    {galleryResponse}
                                </Slider>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className='contact_info toppadder90 bottompadder90'>
                <Container>
                    <Row>
                        <Col sm={12} md={6} lg={4} xl={4}>
                            <div className="con-list">
                                <div className="icons">
                                    <span><i className="fa fa-map-marker"></i></span>
                                </div>
                                <div className="content">
                                    <h2>{web_content[0].home_detail[0].home}</h2>
                                    <p>{web_content[0].home_detail[0].address}</p>
                                </div>
                            </div>
                        </Col>
                        <Col sm={12} md={6} lg={4} xl={4}>
                            <div className="con-list">
                                <div className="icons">
                                    <span><i className="fa fa-phone"></i></span>
                                </div>
                                <div className="content">
                                    <h2>{web_content[0].home_detail[0].phone}</h2>
                                    <p>
                                        <a href={`tel: ${web_content[0].home_detail[0].phone_number[0].phone1}`}>{web_content[0].home_detail[0].phone_number[0].phone1}</a>
                                    </p>
                                    <p>
                                        <a href={`tel: ${web_content[0].home_detail[0].phone_number[0].phone2}`}>{web_content[0].home_detail[0].phone_number[0].phone2}</a>
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col sm={12} md={6} lg={4} xl={4}>
                            <div className="con-list">
                                <div className="icons">
                                    <span><i className="fa fa-envelope"></i></span>
                                </div>
                                <div className="content">
                                    <h2>{web_content[0].email_detail[0].name}</h2>
                                    <p>
                                        <a href={`mailto:${web_content[0].email_detail[0].email_id[0].email1}`}>{web_content[0].email_detail[0].email_id[0].email1}</a>
                                    </p>
                                    <p>
                                        <a href={`mailto:${web_content[0].email_detail[0].email_id[0].email2}`}>{web_content[0].email_detail[0].email_id[0].email2}</a>
                                    </p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <GalleryModal show={showModal} setShow={setShowModal} activeResponse={sendResponse} />
        </div>
    )
};

export default Home;
