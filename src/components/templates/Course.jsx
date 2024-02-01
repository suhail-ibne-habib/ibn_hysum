import React from 'react';

export default function Course(props){
    return(
        <div className="box course">
            <div className="course__feature text-align-center">
                <img src={props.feature} alt="" />
            </div>
            <div className="course__title text-align-center">
                <h3>{props.title}</h3>
            </div>
        </div>
    )
}