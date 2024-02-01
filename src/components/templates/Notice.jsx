import React from "react";
import Feature1 from '../../assets/notice_1.png';

export default function Notice(){
    return(
        <>
            <div className="notice grid grid-col-xs-1 grid-row-xs-2auto grid-col-sm-2">
                <div className="notice__feature text-align-center">
                    <img src={Feature1} alt="" className="notice__feature" />
                </div>
                <div className="notice__details text-align-center">
                    <p>
                    ২০২৪ শিক্ষাবর্ষ হতে হিফয বিভাগ চালু হবে। দক্ষ ও অভিজ্ঞ শিক্ষকগণের নিবিঢ় পর্যবেক্ষণে পরিচালিত আমাদের হিফয বিভাগ আপনার সন্তানের জীবন ও ক্যারিয়ারের ভিত গড়তে সহায়ক হবে ইনশাআল্লাহ।
                    </p>
                </div>
            </div>
            <div className="notice grid grid-col-xs-1 grid-row-xs-2auto grid-col-sm-2">
                <div className="notice__feature text-align-center">
                    <img src={Feature1} alt="" className="notice__feature" />
                </div>
                <div className="notice__details text-align-center">
                    <p>
                    ২০২৪ শিক্ষাবর্ষ হতে হিফয বিভাগ চালু হবে। দক্ষ ও অভিজ্ঞ শিক্ষকগণের নিবিঢ় পর্যবেক্ষণে পরিচালিত আমাদের হিফয বিভাগ আপনার সন্তানের জীবন ও ক্যারিয়ারের ভিত গড়তে সহায়ক হবে ইনশাআল্লাহ।
                    </p>
                </div>
            </div>
        </>
        
        
    )
}