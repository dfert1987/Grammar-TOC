import React, { useState, useEffect } from "react";
import TableBanner from "../TableElements/TableBanner";
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
    </div>
  );
};

export default SentenceModule;
