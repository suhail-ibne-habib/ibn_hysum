import React from 'react'
import HeroImg from '../assets/hero_img.png'

export default function Hero(){
    return(
        <div className="container">

            <div className="grid grid-row-xs-1auto grid-col-xs-1 grid-col-sm-2 hero background border-radius">
                <div className="col hero__left">
                    <div className="content-wrapper">
                        <h2 className="hero__heading"> ভর্তি চলছে!</h2>
                        <p className="hero__para">বাংলাদেশ মাদরাসা শিক্ষাবোর্ডের শিক্ষাক্রম ও পাঠ্যসূচীর অনুসরণে প্লে-৫ম শ্রেণি 
    ও পর্যায়ক্রমে আলিম শ্রেণি পর্যন্ত পাঠদান</p>
                        <div className="btns">
                            <a href="#" className="btn">Register</a>
                            <a href="#" className="btn">Apply</a>
                        </div>
                    </div>
                </div>
                <div className="col hero__right">
                    
                    <img src={HeroImg} className="hero__image" alt=""/>
                    
                </div>
            </div>

        </div>
    )
}
