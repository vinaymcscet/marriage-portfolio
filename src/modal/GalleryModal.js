import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Col, Row } from 'react-bootstrap';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './GalleryModal.css';
import { GallerySmallData } from '../Settings/Settings';

const GalleryModal = ({ show, setShow, activeResponse }) => {
    const [responseIndex, setRessponseIndex] = useState(0);
    console.log("activeResponse", activeResponse);

    useEffect(() => {
        GallerySmallData.map((response, index) => {
            if (response.id === activeResponse.id) {
                setRessponseIndex(response.index);
                console.log("index", response.index);
            }
        });
    }, [activeResponse]);
    const galleryModalSlider = {
        dots: false,
        infinite: true,
        arrows: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        initialSlide: responseIndex
    };
    console.log("responseIndex", responseIndex);

    return (
        <div>
            <Modal
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
                backdrop="static"
            >
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body>
                    <div className="gallery_slider popup-gallery">
                        <Slider {...galleryModalSlider}>
                            {GallerySmallData.map((response, index) => (
                                <div key={index}>
                                    <Row>
                                        <Col sm={12} md={12} lg={12} xl={12}>
                                            <div className="wd_gallery_slide modal_slide">
                                                <img src={response.image} alt={response.alt_image} />
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    )
};

export default GalleryModal;
