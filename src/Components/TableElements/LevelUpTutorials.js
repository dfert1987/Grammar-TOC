import React, { useState, useEffect } from 'react';
import '../../Styles/Table.css';

const LevelUpTutorials = ({ data }) => {
    const [tutorials, setTutorials] = useState([]);
    const [links, setLinks] = useState([]);

    useEffect(() => {
        let allTutorials = [];
        let allLinks = [];
        // eslint-disable-next-line array-callback-return
        data.map((item) => {
            if (item.LEVEL_UP_TUTORIALS !== undefined) {
                allTutorials.push(item.LEVEL_UP_TUTORIALS);
                allLinks.push(item.LEVEL_UP_TUTORIALS_LINKS);
            } else return null;
            setTutorials(allTutorials);
            setLinks(allLinks);
        });
    }, [data]);

    const makeList = () => {
        return tutorials.map((tutorial, index) => (
            <a key={index} href={links[index]} className='link'>
                <p className='column-item right bottom'>{tutorial}</p>
            </a>
        ));
    };

    return (
        <>
            {tutorials.length > 0 ? (
                <section className='subsection assessments bottom'>
                    <h5 className='subsection-header'>Level Up Tutorials</h5>
                    {makeList()}
                </section>
            ) : null}
        </>
    );
};

export default LevelUpTutorials;
