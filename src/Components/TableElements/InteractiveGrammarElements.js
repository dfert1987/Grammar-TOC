import React, { useEffect, useState } from 'react';
import '../../Styles/Table.css';
import launchPreviewContent from '../../api/launchContent';

const InteractiveGrammarElements = ({ data }) => {
  const [lessons, setLessons] = useState([]);

  useEffect(() => {
    if (data.length) {
      const allLessons = data.map((item) => item.LESSONS);
      setLessons(allLessons);
    }
  }, [data]);

  const makeList = () => {
    return lessons.map((lesson, index) => {
      return (
        <div
          key={index}
          onClick={() => launchPreviewContent(data[index]?.RESOURCE_ID)}
          className='link'
        >
          <p className='column-item'>{lesson}</p>
        </div>
      );
    });
  };

  return (
    <div className='interactive-container'>
      <header className='column-header'>
        <h4 className='column-header-text'>Interactive Grammar Lessons</h4>
      </header>
      <section className='left-list'>{makeList()}</section>
    </div>
  );
};

export default InteractiveGrammarElements;
