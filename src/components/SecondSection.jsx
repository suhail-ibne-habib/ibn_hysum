import React from 'react';

import OurGallery from '../assets/our_gallery.png'
import Teacher from '../assets/teacher.png';
import Quran from '../assets/quran.png';
import Library from '../assets/library.png';
import Transport from '../assets/transport.png';

export default function SecondSection(){
    return(
        <div className="container">
            <div className="boxes flex">
                <div className="box">
                    <div className="box__feature">
                        <img src={OurGallery} alt="" />
                    </div>
                    <div className="box__title">
                        <h3>Our Gallery</h3>
                    </div>
                </div>
                <div className="box">
                    <div className="box__feature">
                        <img src={Teacher} alt="" />
                    </div>
                    <div className="box__title">
                        <h3>Our Teachers</h3>
                    </div>
                </div>
                <div className="box">
                    <div className="box__feature">
                        <img src={Quran} alt="" />
                    </div>
                    <div className="box__title">
                        <h3>Our Gallery</h3>
                    </div>
                </div>
                <div className="box">
                    <div className="box__feature">
                        <img src={Library} alt="" />
                    </div>
                    <div className="box__title">
                        <h3>Our Gallery</h3>
                    </div>
                </div>
                <div className="box">
                    <div className="box__feature">
                        <img src={Transport} alt="" />
                    </div>
                    <div className="box__title">
                        <h3>Our Gallery</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}