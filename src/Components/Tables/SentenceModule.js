import React, { useState, useEffect } from "react";
import TableBanner from "../TableElements/TableBanner";
import InteractiveGrammarElements from "../TableElements/InteractiveGrammarElements";
import { TheSentence } from "../../Assets/Data/TheSentence";
import "../../Styles/Table.css";

const SentenceModule = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(TheSentence);
  }, []);

  return (
    <div className="table-container">
      <TableBanner data={data} />
      <section className="two-columns">
        <InteractiveGrammarElements data={data} />
      </section>
    </div>
  );
};

export default SentenceModule;
