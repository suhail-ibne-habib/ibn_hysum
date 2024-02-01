import React from 'react';
import CharacterImg from '../assets/character_left_side.png';

export default function Characteristics(){
    return(
        <>
            <div className="container char grid grid-col-sm-2">
                <div className="col">
                    <img src={CharacterImg} alt="" />
                </div>
                <div className="col char_left">
                    <ul className="char_lists">
                        <li className="char_list">দুনিয়ার শান্তি-উন্নতি ও আখিরাতের মুক্তি এ মাদরাসার মূলনীতি</li>
                        <li className="char_list">বাংলাদেশ মাদরাসা শিক্ষাবোর্ডের শিক্ষাক্রম ও পাঠ্যসূচীর অনুসরণ</li>
                        <li className="char_list">শুদ্ধভাবে বাংলা, ইংরেজি ও আরবি ভাষায় লিখন, পঠন ও কথোপকথন</li>
                        <li className="char_list">ইবনে হাইসাম পাবলিকেশেন্স কর্তৃক প্রণীত বিজ্ঞান বিষয়ক বিশেষ কম্পাইলেশন।</li>
                        <li className="char_list">দুর্বল শিক্ষার্থীদের জন্য  স্পেশাল ক্লাসের ব্যবস্থা।</li>
                        <li className="char_list">অভিভাবক ও শিক্ষার্থীদের সাক্ষাৎকারের মাধ্যমে ভর্তির ব্যবস্থা</li>
                        <li className="char_list">শিক্ষার্থীদের জন্য সায়েন্সক্লাব, ডিবেটক্লাব, স্পোর্টসক্লাব এর ব্যবস্থা</li>
                        <li className="char_list">গণিত অলিম্পিয়াডসহ বিজ্ঞানভিত্তিক বিভিন্ন প্রতিযোগিতায় অংশ গ্রহণের ব্যবস্থা</li>
                    </ul>
                </div>
            </div>
            <div className="space"></div>
            <div className="container char_bottom grid grid-col-sm-2">
                <div className="col">
                    <ul className="char_lists">
                        <li className="char_list">শিক্ষার্থীদের জন্য কম্পিউটার ল্যাব, বিজ্ঞানাগার ও পাঠাগারের সুবিধা</li>
                        <li className="char_list">Smart Attendance পদ্ধতিতে (SMS) এর মাধ্যমে শিক্ষার্থীর উপস্থিতি-অনুপস্থিতি অবগত করা।</li>
                        <li className="char_list">হাতের লেখা সুন্দর, চিত্রাঙ্কন এবং সাংস্কৃতিক প্রশিক্ষণের ব্যবস্থা।</li>
                        <li className="char_list">ক্লাসরুমসহ পুরো ক্যাম্পাস সিসি ক্যামেরার মাধ্যমে সার্বক্ষণিক পর্যবেক্ষণের ব্যবস্থা।</li>
                        <li className="char_list">শিক্ষা ও শিক্ষার্থীদের মানোন্নয়নের জন্য অভিভাবকদের সাথে মাসিক মতবিনিময় সভা।</li>
                    </ul>                    
                </div>
                <div className="col line">
                    <ul className="char_lists">
                        <li className="char_list">শিক্ষার্থীদেরকে আত্মিক শুদ্ধিতা ও নৈতিক দৃঢ়তা এবং দেশপ্রেমে উদ্বুদ্ধকরণের বিশেষ ব্যবস্থা করা</li>
                        <li className="char_list">নিয়মিত শরীর চর্চা, খেলাধুলা ও সুস্থ বিনোদন এবং জাতীয় সংস্কৃতি চর্চায় উদ্বুদ্ধ করা</li>
                        <li className="char_list">শিক্ষার্থীদের জন্য নিরাপদ ও আরামদায়ক পরিবহন ব্যবস্থা</li>
                        <li className="char_list">অভিভাবকদের জন্য সমৃদ্ধ পাঠাগারসহ ওয়েটিং রুমের ব্যবস্থা</li>
                        <li className="char_list">অপেক্ষামান অভিভাবকদের জন্য আলকুরআন প্রশিক্ষণের ব্যবস্থা</li>
                        <li className="char_list">অন্য শিক্ষাপ্রতিষ্ঠানের শিক্ষার্থীদের জন্য প্রি-হিফজ ও হিফজ ক্লাসের ব্যবস্থা।</li>
                    </ul>                    
                </div>
            </div>
        </>
    )
}