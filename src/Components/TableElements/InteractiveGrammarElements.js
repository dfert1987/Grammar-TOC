import React, { useEffect, useState } from "react";
import "../../Styles/Table.css";

const InteractiveGrammarElements = ({ data }) => {
  const [lessons, setLessons] = useState([]);
  const [links, setLinks] = useState([]);

  useEffect(() => {
    if (data.length) {
      const allLessons = data.map((item) => item.LESSONS);
      setLessons(allLessons);

      const allLinks = data.map((item) => item.LESSONS_LINKS);
      setLinks(allLinks);
    }
  }, [data]);

  const makeList = () => {
    return lessons.map((lesson, index) => (
      <a key={index} href={links[index]} className="link">
        <p className="column-item">{lesson}</p>
      </a>
    ));
  };

  return (
    <div className="interactive-container">
      <header className="column-header">
        <h4 className="column-header-text">Interactive Grammar Lessons</h4>
      </header>
      <section className="left-list">{makeList()}</section>
    </div>
  );
};

export default InteractiveGrammarElements;
