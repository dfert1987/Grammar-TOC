import React, { useEffect, useState } from "react";
import "../../Styles/Table.css";

const TableBanner = ({ data }) => {
  const [title, setTitle] = useState("");

  useEffect(() => {
    if (data[0]) {
      const tableTitle = data[0].MODULE;
      setTitle(tableTitle);
    }
  }, [data]);

  return (
    <div className="table-banner">
      <section className="table-banner-text">
        <h4 className="module-subheader">INTERACTIVE GRAMMAR MODULE</h4>
        <h2 className="module-header">{title}</h2>
      </section>
    </div>
  );
};

export default TableBanner;
