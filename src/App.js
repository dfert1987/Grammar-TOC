import React from "react";
import Banner from "./Components/Banner";
import SentenceModule from "./Components/Tables/SentenceModule";
import "./Styles/App.css";

function App() {
  return (
    <div className="main">
      <Banner />
      <SentenceModule />
    </div>
  );
}

export default App;
