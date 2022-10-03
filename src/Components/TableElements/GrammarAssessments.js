import React, { useState, useEffect } from 'react';
import DataIcon from '../../Assets/Icons/DataIcon.png';
import '../../Styles/Table.css';

const GrammarAssessments = ({ data }) => {
    const [assessments, setAssessments] = useState([]);

    useEffect(() => {
        const allAssessments = data.map((item) => item.GRAMMAR_ASSESSMENTS);
        setAssessments(allAssessments);
    }, [data]);

    const getIcon = (index) => {
        if (data[index].ASSEMENT_ICON === true) {
            return (
                <img
                    className='data-icon-list'
                    alt='data icon'
                    src={DataIcon}
                />
            );
        }
    };

    const makeList = () => {
        return assessments.map((assessment, index) =>
            assessment ? (
                <span key={index} className='assessment-item'>
                    <p className='assessment-name'>{assessment}</p>
                    {getIcon(index)}
                </span>
            ) : null
        );
    };

    return (
        <section className='subsection assessments'>
            <h5 className='subsection-header'>Grammar Assessments</h5>
            {makeList()}
        </section>
    );
};

export default GrammarAssessments;
