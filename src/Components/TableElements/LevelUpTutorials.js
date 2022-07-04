import React, { useState, useEffect } from "react";
import "../../Styles/Table.css";

const LevelUpTutorials = ({ data }) => {
  const [tutorials, setTutorials] = useState([]);
  const [links, setLinks] = useState([]);

  useEffect(() => {
    const allTutorials = data.map((tutorial) => tutorial.LEVEL_UP_TUTORIALS);
    setTutorials(allTutorials);

    const allLinks = data.map((link) => link.LEVEL_UP_TUTORIALS_LINKS);
    setLinks(allLinks);
  }, [data]);

  const makeList = () => {
    return tutorials.map((tutorial, index) => (
      <a key={index} href={links[index]} className="link">
        <p className="column-item right bottom">{tutorial}</p>
      </a>
    ));
  };

  return (
    <section className="subsection assessments bottom">
      <h4 className="subsection-header">Level Up Tutorials</h4>
      {makeList()}
    </section>
  );
};

export default LevelUpTutorials;
