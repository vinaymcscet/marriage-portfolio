import React, { useEffect, useState } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Outlet } from "react-router-dom";
import { LinkContainer } from 'react-router-bootstrap'
import './Header.css';

const Header = () => {
    const [scroll, setScroll] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 500);
        });
    }, [scroll]);
    return (
        <div>
            <div className={'header_wrapper ' + (scroll ? 'menu_fixed animated fadeInDown' : '')}>
                <Navbar collapseOnSelect expand="lg">
                    <Container fluid>
                        <LinkContainer to="/">
                            <Navbar.Brand>
                                <div className="m_logo">
                                    <img src="images/header/logo1.png" alt="Logo" title="Logo" className="img-responsive" />
                                </div>
                            </Navbar.Brand>
                        </LinkContainer>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                            <Nav>
                                <LinkContainer to="/">
                                    <Nav.Link>Home</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to="/events">
                                    <Nav.Link>
                                        Events
                                    </Nav.Link>
                                </LinkContainer>
                                <LinkContainer to="/family">
                                    <Nav.Link>
                                        Family
                                    </Nav.Link>
                                </LinkContainer>
                                <LinkContainer to="/gallery">
                                    <Nav.Link>
                                        Gallery
                                    </Nav.Link>
                                </LinkContainer>
                                <LinkContainer to="/contact">
                                    <Nav.Link>
                                        Contact
                                    </Nav.Link>
                                </LinkContainer>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
            <Outlet />
        </div>
    );
};

export default Header;