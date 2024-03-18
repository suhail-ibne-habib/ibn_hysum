import React from 'react'
import { FaClock } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Career() {
  return (
    <div>
        <div className="container">
            <h1>Start Doing work that matters</h1>
            <p>Our philosophy is simple - hire a team of diverse, passionate people and foster a culture that empowers you to do your best work.</p>
            <div className="jobs">
                <div className="job">
                    <h3 className="job__title">
                        <Link to='/notice'>Assistance Teacher</Link>
                    </h3>
                    <p className="job__description">
                        হিফজ এবং হুফফাজ / নুরানি প্রশিক্ষণপ্রাপ্ত অভিজ্ঞদের অগ্রাধিকার দেয়া হবে।
                    </p>
                    <div className="job__footer">
                        <div className="job__type">
                            <span className="job__footer_icon"><FaClock /></span>
                            <span>Full Time</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Career