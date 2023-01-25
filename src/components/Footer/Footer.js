import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
    return (

        <footer className='toppadder50 bottompadder50'>
            <Container>
                <Row>
                    <Col sm={12} md={12} lg={12} xl={12}>
                        <div className="footer_section">
                            <img src="images/header/flogo1.png" alt="Logo" className="img-responsive" />
                                <p>@ Copyright 2023 All Rights Reserved</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
};

export default Footer;
