import React, { useState, useEffect } from 'react';
import PDFIcon from '../../Assets/Icons/PDFIcon.png';
import '../../Styles/Table.css';

const EditablePractice = ({ data }) => {
    const [practiceItems, setPracticeItems] = useState([]);
    const [links, setLinks] = useState([]);

    useEffect(() => {
        if (data.length) {
            const allPractice = data.map(
                (item) => item.EDITABLE_GRAMMAR_PRACTICE
            );
            setPracticeItems(allPractice);

            const allLinks = data.map((item) => item.EDITABLE_ICON_LINKS);
            setLinks(allLinks);
        }
    }, [data]);

    const makeList = () => {
        return practiceItems.map((practiceItem, index) => (
            <span key={index} className='practice-item'>
                <a className='link' href={links[index]}>
                    <p className='practice-item-name'>{practiceItem}</p>
                </a>
                <img className='pdf-icon-list' alt='PDF Icon' src={PDFIcon} />
            </span>
        ));
    };

    return (
        <section className='subsection assessments'>
            <h5 className='subsection-header'>Editable Grammar Practice</h5>
            {makeList()}
        </section>
    );
};

export default EditablePractice;
