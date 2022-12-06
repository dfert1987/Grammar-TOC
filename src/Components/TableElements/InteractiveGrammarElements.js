import React, { useEffect, useState } from 'react';
import launchPreviewContent from '../../api/launchContent';
import { region } from '../../constants';
import '../../Styles/Table.css';

const InteractiveGrammarElements = ({ data }) => {
    const [lessons, setLessons] = useState([]);

    useEffect(() => {
        if (data.length) {
            const allLessons = data.map((item) => item.LESSONS);
            setLessons(allLessons);
        }
    }, [data]);

    const regionRouting = (index) => {
        if (region === 'NA') {
            launchPreviewContent(data[index]?.RESOURCE_ID);
        } else if (region === 'FL') {
            launchPreviewContent(data[index]?.FL_RESOURCE_ID);
        } else if (region === 'TX') {
            launchPreviewContent(data[index]?.TX_RESOURCE_ID);
        } else if (region === 'VA') {
            launchPreviewContent(data[index]?.VA_RESOURCE_ID);
        } else if (region === 'TN') {
            launchPreviewContent(data[index]?.TN_RESOURCE_ID);
        }
    };

    const makeList = () => {
        return lessons.map((lesson, index) => {
            return (
                <div
                    key={index}
                    onClick={() => regionRouting(index)}
                    className='link'>
                    <p className='column-item'>{lesson}</p>
                </div>
            );
        });
    };

    return (
        <div className='interactive-container'>
            <header className='column-header'>
                <h4 className='column-header-text'>
                    Interactive Grammar Lessons
                </h4>
            </header>
            <section className='left-list'>{makeList()}</section>
        </div>
    );
};

export default InteractiveGrammarElements;
