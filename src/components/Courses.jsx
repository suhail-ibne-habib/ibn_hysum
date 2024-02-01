import React from 'react';
import Feature1 from '../assets/Preschool.png';
import Feature2 from '../assets/School.png';
import Feature3 from '../assets/Pre_hifz.png';
import Feature4 from '../assets/Hifz.png';
import Course from './templates/Course';

export default function Courses(){
    return(
        <div className="boxes container flex">
            <Course feature={Feature1} title="Pre School" />
            <Course feature={Feature2} title="School" />
            <Course feature={Feature3} title="Pre Hifz" />
            <Course feature={Feature4} title="Hifz" />
        </div>
    )
}