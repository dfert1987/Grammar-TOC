import React, { useState, useEffect } from "react";
import "../../Styles/Table.css";

const GrammarQuickFix = ({ data }) => {
  const [lessons, setLessons] = useState([]);
  const [links, setLinks] = useState([]);

  useEffect(() => {
    const allLessons = data.map((item) => item.GRAMMAR_QUICK_FIX);
    setLessons(allLessons);

    const allLinks = data.map((item) => item.GRAMMAR_QUICK_FIX_LINKS);
    setLinks(allLinks);
  }, [data]);

  const makeList = () => {
    return lessons.map((lesson, index) => (
      <a key={index} href={links[index]} className="link">
        <p className="column-item right">{lesson}</p>
      </a>
    ));
  };

  return (
    <section className="subsection">
      <h4 className="subsection-header quick">Grammar Quick Fix</h4>
      {makeList()}
    </section>
  );
};

export default GrammarQuickFix;
