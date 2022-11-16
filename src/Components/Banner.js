import React from 'react';
import { gradeLevel } from '../constants';
import '../Styles/Banner.css';

const Banner = () => {
    return (
        <div className='banner-container'>
            <div className='banner-text-container'>
                <h1 className='banner-head'>
                    <section className='grade-title-container'>
                        <span className='grade-banner'>GRADE</span>
                        <span className='grade-number'>{gradeLevel}</span>
                    </section>
                    <span className='banner-title'>Grammar Resources</span>
                </h1>
            </div>
        </div>
    );
};

export default Banner;
