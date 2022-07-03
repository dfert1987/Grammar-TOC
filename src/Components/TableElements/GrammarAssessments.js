import React, { useState, useEffect } from "react";
import DataIcon from "../../Assets/Icons/DataIcon.png";
import "../../Styles/Table.css";

const GrammarAssessments = ({ data }) => {
  const [assessments, setAssessments] = useState([]);
  console.log(assessments);

  useEffect(() => {
    const allAssessments = data.map((item) => item.GRAMMAR_ASSESSMENTS);
    console.log(allAssessments);
    setAssessments(allAssessments);
  }, [data]);

  const getIcon = (index) => {
    if (data[index].ASSEMENT_ICON === true) {
      return <img className="data-icon-list" alt="data icon" src={DataIcon} />;
    }
  };

  const makeList = () => {
    return assessments.map((assessment, index) =>
      assessment ? (
        <span key={index} className="assessment-item">
          <p className="assessment-name">{assessment}</p>
          {getIcon(index)}
        </span>
      ) : null
    );
  };

  return (
    <section className="subsection assessments">
      <h4 className="subsection-header">Grammar Assessements</h4>
      {makeList()}
    </section>
  );
};

export default GrammarAssessments;
