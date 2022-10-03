import React, { useState, useEffect } from "react";
import DataIcon from "../../Assets/Icons/DataIcon.png";
import "../../Styles/Table.css";

const LevelUpPractice = ({ data }) => {
  const [tests, setTests] = useState([]);

  useEffect(() => {
    let allTests = [];
    // eslint-disable-next-line array-callback-return
    data.map((item) => {
      if (item.LEVEL_UP_PRACTICE_TEST_TESTS !== undefined) {
        allTests.push(item.LEVEL_UP_PRACTICE_TEST_TESTS);
      } else return null;
      setTests(allTests);
    });
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

  console.log(tests);

  return (
    <>
      {tests.length > 0 ? (
        <section className="subsection assessments">
          <h5 className="subsection-header bottom">Level Up Practice</h5>
          {makeList()}
        </section>
      ) : null}
    </>
  );
};

export default LevelUpPractice;
