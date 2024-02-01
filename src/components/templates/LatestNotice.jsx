import React from 'react';
import SingleLatestNotice from './SingleLatestNotice';

export default function LatestNotice(){
    return(
        <div className="latest_notice__wrapper">
            <h3 className="latest_notice__title">Latest</h3>
            <ul className="latest_notice__lists">
                <SingleLatestNotice />
                <SingleLatestNotice />
                <SingleLatestNotice />
                <SingleLatestNotice />
            </ul>
        </div>
    )
}