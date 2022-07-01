import React from "react";
import Banner from "./Components/Banner";
import Intro from "./Components/Intro";
import SentenceModule from "./Components/Tables/SentenceModule";
import "./Styles/App.css";

function App() {
  return (
    <div className="main">
      <Banner />
      <Intro />
      <SentenceModule />
    </div>
  );
}

export default App;
