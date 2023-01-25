import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { LightgalleryProvider, LightgalleryItem } from 'react-lightgallery';
import { Link } from 'react-router-dom';
import uuid from 'react-uuid';
import { GALLERY_GROUP, web_content } from '../../Settings/Settings';
import './Gallery.css';


const PhotoItem = ({ image, thumb, group }) => (
  <div className="galleryItem">
    <LightgalleryItem group={group} src={image} thumb={thumb}>
      <img src={image} alt="light theme for gallery" style={{ width: "100%" }} />
      <span><i className="fa fa-search"></i>
      </span>
    </LightgalleryItem>
  </div>
);

const Gallery = () => {
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
                <p>{web_content[0].photo_gallery}</p>
                <ul>
                  <li><Link to="/">{web_content[0].home}</Link></li>
                  <li> &gt; &nbsp;&nbsp; {web_content[0].gallery}</li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="gallery_wrapper toppadder90 bottompadder90">
        <Container>
          <Row>
            <Col sm={12} md={12} lg={12} xl={12}>
              <div className="heading wow fadeInDown" data-wow-delay="0.3s">
                <h4>{web_content[0].ceremony}</h4>
                <h1>{web_content[0].wedding_gallery}</h1>
                <img src={web_content[0].heading[0].name} alt={web_content[0].heading[0].alt_text} className="img-responsive" />
              </div>
            </Col>
          </Row>
        </Container>
        <Container fluid="lg">
          <Row>
            <Col sm={12} md={12} lg={12} xl={12}>
              <LightgalleryProvider>
                <div class="gallery_wrapper">
                  {GALLERY_GROUP.map((p) => (
                    <PhotoItem key={uuid()} image={p} group="group2" />
                  ))}
                </div>
              </LightgalleryProvider>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Gallery;
