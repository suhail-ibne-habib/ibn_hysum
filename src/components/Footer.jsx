import React from 'react'
import Logo from '../assets/logo.png'

export default function footer(){
    return(
        <footer className='background'>
            
            <div className="container">
                <div className="grid grid-col-sm-2">
                    <div className="footer_col column">
                        <div className="brand">
                            <img src={Logo} alt="" className="logo" />
                        </div>
                        <div className="footer_details">
                            <p>সাধারণ ও ইসলামি শিক্ষার সাথে বিজ্ঞান শিক্ষার সমন্বয়ে ব্যতিক্রমী ও সৃজনশীল শিক্ষার মাধ্যমে ইসলামী জ্ঞানসমৃদ্ধ, বিজ্ঞানমনস্ক, সর্বাধুনিক তথ্য-প্রযুক্তিতে বিশেষজ্ঞ ও দেশপ্রেমে উদ্বুদ্ধ জনসম্পদ হিসেবে গড়ে তোলা</p>
                        </div>
                    </div>
                    <div className="footer_col">
                        <div className="menus-wrapper grid grid-col-sm-2 grid-col-md-3">
                            <div className="column">
                                <div className="menu_title">Contents</div>
                                <ul id="footer_menu_1" className="footer_menu">
                                    <li className="footer_list">
                                        <a href="/home" className="footer_link">Home</a>
                                    </li>
                                    <li className="footer_list">
                                        <a href="/home" className="footer_link">About Us</a>
                                    </li>
                                    <li className="footer_list">
                                        <a href="/home" className="footer_link">Class</a>
                                    </li>
                                    <li className="footer_list">
                                        <a href="/home" className="footer_link">Admission</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="column">
                                <div className="menu_title">Couses</div>
                                <ul id="footer_menu_1" className="footer_menu">
                                    <li className="footer_list">
                                        <a href="/home" className="footer_link">Preschool</a>
                                    </li>
                                    <li className="footer_list">
                                        <a href="/home" className="footer_link">School</a>
                                    </li>
                                    <li className="footer_list">
                                        <a href="/home" className="footer_link">Pre Hifz</a>
                                    </li>
                                    <li className="footer_list">
                                        <a href="/home" className="footer_link">Hifz</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="column">
                                <div className="menu_title">Notice</div>
                                <ul id="footer_menu_1" className="footer_menu">
                                    <li className="footer_list">
                                        <a href="/home" className="footer_link">News</a>
                                    </li>
                                    <li className="footer_list">
                                        <a href="/home" className="footer_link">Latest</a>
                                    </li>
                                    <li className="footer_list">
                                        <a href="/home" className="footer_link">Yearly</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
        </footer>
    )
}