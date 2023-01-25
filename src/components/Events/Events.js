import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import HTMLFlipBook from 'react-pageflip';
import './Events.css';
import { useEffect } from 'react';
import { web_content } from '../../Settings/Settings';

const Events = () => {
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
  console.log("web-content", web_content);
  return (
    <div>
      <div className='title_main_wrapper'>
        <Container>
          <Row>
            <Col sm={12} md={12} lg={12} xl={12}>
              <div className="blog_title_heading_wrapper">
                <p>{web_content[0].events}</p>
                <ul>
                  <li><Link to="/">{web_content[0].home}</Link></li>
                  <li> &gt; &nbsp;&nbsp; {web_content[0].events}</li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>

      </div>
      <div className="story_wrapper toppadder90 bottompadder90">
        <Container>
          <Row>
            <Col sm={12} md={12} lg={12} xl={12}>
              <div className="heading wow fadeInDown" data-wow-delay="0.3s">
                <h4>{web_content[0].ceremony}</h4>
                <h1>{web_content[0].wedding_event}</h1>
                <img src={web_content[0].heading[0].name} alt={web_content[0].heading[0].alt_text} className="img-responsive" />
              </div>
            </Col>
            <Col sm={12} md={12} lg={12} xl={12}>
              <div className="story_covers">
                <div className="story_line"></div>
                <div className="story_covers_box_left">
                  <div className="story_dot"><span></span></div>
                  <div className="story_covers_box_img">
                    <img src={web_content[0].shadi_events[0].image[0].name} alt={web_content[0].shadi_events[0].image[0].alt_text} />
                  </div>
                  <div className="story_covers_box_datails">
                    <span>{web_content[0].shadi_events[0].date}</span>
                    <h1>{web_content[0].shadi_events[0].name}</h1>
                    <span>{web_content[0].shadi_events[0].title}</span>
                    <p>{web_content[0].shadi_events[0].description}</p>
                  </div>
                </div>
                <div className="story_covers_box_right">
                  <div className="story_dot"><span></span></div>
                  <div className="story_covers_box_datails">
                    <span>{web_content[0].shadi_events[1].date}</span>
                    <h1>{web_content[0].shadi_events[1].name}</h1>
                    <span>{web_content[0].shadi_events[1].title}</span>
                    <p>{web_content[0].shadi_events[1].description}</p>
                  </div>
                  <div className="story_covers_box_img">
                    <img src={web_content[0].shadi_events[1].image[0].name} alt={web_content[0].shadi_events[1].image[0].alt_text} />
                  </div>
                </div>
                <div className="story_covers_box_left">
                  <div className="story_dot"><span></span></div>
                  <div className="story_covers_box_img">
                    <img src={web_content[0].shadi_events[2].image[0].name} alt={web_content[0].shadi_events[2].image[0].alt_text} />
                  </div>
                  <div className="story_covers_box_datails">
                    <span>{web_content[0].shadi_events[2].date}</span>
                    <h1>{web_content[0].shadi_events[2].name}</h1>
                    <span>{web_content[0].shadi_events[2].title}</span>
                    <p>{web_content[0].shadi_events[2].description}</p>
                  </div>
                </div>
                <div className="story_covers_box_right">
                  <div className="story_dot"><span></span></div>
                  <div className="story_covers_box_datails">
                    <span>{web_content[0].shadi_events[3].date}</span>
                    <h1>{web_content[0].shadi_events[3].name}</h1>
                    <span>{web_content[0].shadi_events[3].title}</span>
                    <p>{web_content[0].shadi_events[3].description}</p>
                  </div>
                  <div className="story_covers_box_img">
                    <img src={web_content[0].shadi_events[3].image[0].name} alt={web_content[0].shadi_events[3].image[0].alt_text} />
                  </div>
                </div>
                <div className="story_covers_box_left">
                  <div className="story_dot"><span></span></div>
                  <div className="story_covers_box_img">
                    <img src={web_content[0].shadi_events[4].image[0].name} alt={web_content[0].shadi_events[4].image[0].alt_text} />
                  </div>
                  <div className="story_covers_box_datails">
                    <span>{web_content[0].shadi_events[4].date}</span>
                    <h1>{web_content[0].shadi_events[4].name}</h1>
                    <span>{web_content[0].shadi_events[4].title}</span>
                    <p>{web_content[0].shadi_events[4].description}</p>
                  </div>
                </div>
                <div className="story_covers_box_right">
                  <div className="story_dot"><span></span></div>
                  <div className="story_covers_box_datails">
                    <span>{web_content[0].shadi_events[5].date}</span>
                    <h1>{web_content[0].shadi_events[5].name}</h1>
                    <span>{web_content[0].shadi_events[5].title}</span>
                    <p>{web_content[0].shadi_events[5].description}</p>
                  </div>
                  <div className="story_covers_box_img">
                    <img src={web_content[0].shadi_events[5].image[0].name} alt={web_content[0].shadi_events[5].image[0].alt_text} />
                  </div>
                </div>
              </div>
            </Col>
            <Col sm={12} md={12} lg={12} xl={12}>
              <div className="heading wow fadeInDown marginTop50" data-wow-delay="0.3s">
                <h4>{web_content[0].ceremony}</h4>
                <h1>{web_content[0].wedding_event}</h1>
                <img src={web_content[0].heading[0].name} alt={web_content[0].heading[0].alt_text} className="img-responsive" />
              </div>
            </Col>
            <Col sm={12} md={12} lg={12} xl={12}>
              <div className="flipBookbox">
                <HTMLFlipBook width={300} height={500} showCover={true} >
                  <div id='1' ref="1" className="demoPage"><img className="passport" src={web_content[0].flip_book[0].name} alt={web_content[0].flip_book[0].alt_text} /></div>
                  <div className="demoPage"><img src={web_content[0].flip_book[1].name} alt={web_content[0].flip_book[1].name} /></div>
                  <div className="demoPage"><img src={web_content[0].flip_book[2].name} alt={web_content[0].flip_book[2].name} /> </div>
                  <div className="demoPage"><img src={web_content[0].flip_book[3].name} alt={web_content[0].flip_book[3].name} /> </div>
                  <div className="demoPage"><img src={web_content[0].flip_book[4].name} alt={web_content[0].flip_book[4].name} /> </div>
                  <div className="demoPage"><img src={web_content[0].flip_book[5].name} alt={web_content[0].flip_book[5].name} /> </div>
                </HTMLFlipBook>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Events;
