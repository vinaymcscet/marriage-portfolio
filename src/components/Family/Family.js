import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
import GroomFamily from '../groomFamily/groomFamily';
import BrideFamily from '../brideFamily/brideFamily';

import './Family.css';
import { testimonials, testimonialSettings, web_content } from '../../Settings/Settings';
import Slider from 'react-slick';

const Family = () => {
  const [key, setKey] = useState('groom');
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
                <p> {web_content[0].family}</p>
                <ul>
                  <li><Link to="/">{web_content[0].home}</Link></li>
                  <li> &gt; &nbsp;&nbsp; {web_content[0].family}</li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="family_wrapper toppadder90 bottompadder90">
        <Container>
          <Row>
            <Col sm={12} md={12} lg={12} xl={12}>
              <div className="heading wow fadeInDown" data-wow-delay="0.3s">
                <h4>{web_content[0].imp_person}</h4>
                <h1>{web_content[0].lovable_family}</h1>
                <img src={web_content[0].heading[0].name} alt={web_content[0].heading[0].alt_text} className="img-responsive" />
              </div>
            </Col>
          </Row>
          <div className="family_tabbox">
            <Tab.Container id="left-tabs-example" defaultActiveKey={key}>
              <Row>
                <Col sm={12} md={12} lg={12} xl={12}>
                  <Nav variant="pills" className="flex-row">
                    <Nav.Item>
                      <Nav.Link eventKey="groom" title={web_content[0].groom[0].alt_text} onSelect={(k) => setKey(k)}>
                        <img src={web_content[0].family_tab_detail[0].name} alt={web_content[0].family_tab_detail[0].alt_text} />
                        <p>{web_content[0].family_tab_detail[0].title_name}</p>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="bride" title={web_content[0].bride[0].alt_text} onSelect={(k) => setKey(k)}>
                      <img src={web_content[0].family_tab_detail[1].name} alt={web_content[0].family_tab_detail[1].alt_text} />
                        <p>{web_content[0].family_tab_detail[1].title_name}</p>
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col sm={12} md={12} lg={12} xl={12}>
                  <Tab.Content>
                    <Tab.Pane eventKey="groom" title={web_content[0].groom[0].alt_text}>
                      <GroomFamily />
                    </Tab.Pane>
                    <Tab.Pane eventKey="bride" title={web_content[0].bride[0].alt_text}>
                      <BrideFamily />
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </div>
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
    </div>
  );
};

export default Family;
