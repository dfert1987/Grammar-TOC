import React, { useState, useEffect } from 'react';
import PPTIcon from '../../Assets/Icons/PPTIcon.png';
import '../../Styles/Table.css';

const GrammarQuickFix = ({ data }) => {
    const [lessons, setLessons] = useState([]);
    const [links, setLinks] = useState([]);

    useEffect(() => {
        let allLessons = [];
        let allLinks = [];
        // eslint-disable-next-line array-callback-return
        data.map((item) => {
            if (item.GRAMMAR_QUICK_FIX !== undefined) {
                allLessons.push(item.GRAMMAR_QUICK_FIX);
                allLinks.push(item.GRAMMAR_QUICK_FIX_LINKS);
            } else return null;
            setLessons(allLessons);
            setLinks(allLinks);
        });
    }, [data]);

    const makeList = () => {
        return lessons.map((lesson, index) =>
            lesson ? (
                <span key={index} className='practice-item'>
                    <a key={index} href={links[index]} className='link'>
                        <p className='column-item right'>{lesson}</p>
                    </a>
                    <img
                        className='pdf-icon-list'
                        alt='PDF Icon'
                        src={PPTIcon}
                    />
                </span>
            ) : null
        );
    };

    return (
        <>
            {lessons.length > 0 ? (
                <section className='subsection'>
                    <h5 className='quick-fix-header'>
                        <span className='new'>NEW</span>
                        <span className='subsection-header quick'>
                            Grammar Quick Fix
                        </span>
                    </h5>
                    {makeList()}
                </section>
            ) : null}
        </>
    );
};

export default GrammarQuickFix;
