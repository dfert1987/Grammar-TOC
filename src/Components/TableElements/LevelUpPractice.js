import React, { useState, useEffect } from "react";
import DataIcon from "../../Assets/Icons/DataIcon.png";
import "../../Styles/Table.css";

const LevelUpPractice = ({ data }) => {
  const [tests, setTests] = useState([]);

  useEffect(() => {
    const allTests = data.map((item) => item.LEVEL_UP_PRACTICE_TESTS);
    setTests(allTests);
  }, [data]);

  const getIcon = (index) => {
    if (data[index].LEVEL_UP_PRACTICE_TEST_ICONs === true) {
      return <img className="data-icon-list" alt="data icon" src={DataIcon} />;
    }
  };

  const makeList = () => {
    return tests.map((test, index) =>
      test ? (
        <span key={index} className="assessment-item">
          <p className="assessment-name">{test}</p>
          {getIcon(index)}
        </span>
      ) : null
    );
  };

  return (
    <section className="subsection assessments">
      <h4 className="subsection-header bottom">Level Up Practice</h4>
      {makeList()}
    </section>
  );
};

export default LevelUpPractice;
