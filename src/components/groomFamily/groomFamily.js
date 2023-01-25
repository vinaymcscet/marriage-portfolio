import React from 'react';
import Slider from 'react-slick';
import { familyMemberSetting, groomFamily } from '../../Settings/Settings';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './groomFamily.css';
import { Link } from 'react-router-dom';

const GroomFamily = () => {
    const groomfamilyList = groomFamily.map((data, index) => (
        <div key={index}>
            <div className="family_infobox">
                <div className="family_infobox_img">
                    <span><img src={data.line} alt="Line" /></span>
                    <img src={data.image} alt="Family" />
                </div>
                <h2>{data.name}</h2>
                <p>({data.relation})</p>
                {data.socialMedia.map((medianame, index) => (
                    <ul key={index}>
                        <li><Link onClick={() => { window.open(medianame.facebook, "_blank") }}><i className="fa fa-facebook" aria-hidden="true"></i></Link></li>
                        <li><Link onClick={() => { window.open(medianame.twitter, "_blank") }}><i className="fa fa-twitter" aria-hidden="true"></i></Link></li>
                        <li><Link onClick={() => { window.open(medianame.linkedin, "_blank") }}><i className="fa fa-instagram" aria-hidden="true"></i></Link></li>
                    </ul>
                ))}
            </div>
        </div>
    ));
    return (
        <div>
            <div className='family_slider'>
                <Slider {...familyMemberSetting}>
                    {groomfamilyList}
                </Slider>
            </div>
        </div>
    )
};

export default GroomFamily;
