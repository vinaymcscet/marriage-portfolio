import React from 'react';
import { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { Contact_testimonials, testimonialSettings, web_content, WeddingWishes } from '../../Settings/Settings';
import TypeWriterEffect from '../../TypeWriterEffect/TypeWriterEffect';
import BestWishesForm from '../BestWishesForm/BestWishesForm';
import './Contact.css';

const Contact = () => {
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
  return (
    <div>
      <div className='title_main_wrapper'>
        <Container>
          <Row>
            <Col sm={12} md={12} lg={12} xl={12}>
              <div className="blog_title_heading_wrapper">
                <p>{web_content[0].contact}</p>
                <ul>
                  <li><Link to="/">{web_content[0].home}</Link></li>
                  <li> &gt; &nbsp;&nbsp; {web_content[0].contact}</li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="testimonial_contact_wrapper toppadder70 bottompadder70">
        <Container>
          <Row>
            <Col sm={12} md={12} lg={12} xl={12}>
              <div className="testimonial_slider">
                <Slider {...testimonialSettings}>
                  {Contact_testimonials.map((data, index) => (
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
      <div className="contact_location">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14412.75854370765!2d81.79610763057462!3d25.43192281173953!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399acb2a267a7e1d%3A0xaaaa352841dc4923!2sRaju%20Milk%20Dairy!5e0!3m2!1sen!2sin!4v1674217735251!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 + 'px' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Marriage Address"
        ></iframe>
      </div>
      <div className='contact_wrapper toppadder90 bottompadder90'>
        <div className="overlay"></div>
        <Container>
          <Row>
            <Col sm={12} md={12} lg={12} xl={12}>
              <div className="wd_heading wow fadeInDown" data-wow-delay="0.3s">
                <h4>{web_content[0].best_wishes}</h4>
                {/* <h1>SEND WEDDING WISHES</h1> */}
                <TypeWriterEffect
                  WeddingWishes={WeddingWishes}
                />
                <img src={web_content[0].heading[0].name} alt={web_content[0].heading[0].alt_text} className="img-responsive" />
              </div>
            </Col>
            <Col sm={12} md={12} lg={12} xl={12}>
              <BestWishesForm />
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
    </div>
  );
};

export default Contact;
