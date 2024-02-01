import React from 'react';
import OurGoal from '../assets/our_goal.png';
import Goal from '../assets/goal.png';

export default function AboutUs(){
    return(
        <>
            <div className="about_us container grid grid-col-xs-1 grid-col-sm-2">

                <div className="col">
                    <h2 className="about_us__title">আমাদের লক্ষ্য</h2>
                    <p className="about_us__para">মানবতা ও নৈতিকতা বিকাশের মাধ্যমে পার্থিব উন্নতি সাধন ও 
    পারলৌকিক মুক্তি অর্জন।</p>
                </div>
                <div className="col">
                    <img src={OurGoal} alt="" />
                </div>

            </div>
            <div className="space"></div>
            <div className="about_us goal container grid grid-col-xs-1 grid-col-sm-2">

                <div className="col">
                    <img src={Goal} alt="" />
                </div>
                <div className="col">
                    <h2 className="about_us__title">আমাদের উদ্দেশ্য</h2>
                    <p className="about_us__para">সাধারণ ও ইসলামি শিক্ষার সাথে বিজ্ঞান শিক্ষার সমন্বয়ে ব্যতিক্রমী 
ও সৃজনশীল শিক্ষার মাধ্যমে ইসলামী জ্ঞানসমৃদ্ধ, বিজ্ঞানমনস্ক, 
সর্বাধুনিক তথ্য-প্রযুক্তিতে বিশেষজ্ঞ ও দেশপ্রেমে উদ্বুদ্ধ জনসম্পদ
    হিসেবে গড়ে তোলা</p>
                </div>
            
        </div>

        </>
    )
}