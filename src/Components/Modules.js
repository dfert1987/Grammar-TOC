import React, { useState, useEffect } from "react";
import TableBanner from "./TableElements/TableBanner";
import InteractiveGrammarElements from "./TableElements/InteractiveGrammarElements";
import AdditionalResources from "./TableElements/AdditionalResources";
import { TheSentence } from "../Assets/Data/TheSentence";
import { PartsOfSpeechNouns } from "../Assets/Data/PartsOfSpeechNouns";
import { PartsOfSpeechVerbs } from "../Assets/Data/PartsOfSpeechVerbs";
import { PrepositionalPhrase } from "../Assets/Data/PrepositionalPhrase";
import { Complements } from "../Assets/Data/Complements";
import { Agreement } from "../Assets/Data/Agreement";
import { UsingVerbs } from "../Assets/Data/UsingVerbs";
import { Pronouns } from "../Assets/Data/Pronouns";
import { Modifiers } from "../Assets/Data/Modifiers";
import { Glossary } from "../Assets/Data/Glossary";
import { Capitals } from "../Assets/Data/Capitals";
import { Punctuation } from "../Assets/Data/Punctuation";
import { Punctuation2 } from "../Assets/Data/Punctuation2";
import { Spelling } from "../Assets/Data/Spelling";
import "../Styles/Table.css";

const SentenceModule = () => {
  const [data, setData] = useState([]);
  const [dataNouns, setDataNouns] = useState([]);
  const [dataVerbs, setDataVerbs] = useState([]);
  const [dataPrep, setDataPrep] = useState([]);
  const [dataComplements, setDataComplements] = useState([]);
  const [dataAgreements, setDataAgreements] = useState([]);
  const [dataUsingVerbs, setDataUsingVerbs] = useState([]);
  const [dataPronouns, setDataPronouns] = useState([]);
  const [dataModifiers, setDataModifiers] = useState([]);
  const [dataGlossary, setDataGlossary] = useState([]);
  const [dataCapitals, setDataCapitals] = useState([]);
  const [dataPunctuation, setDataPunctuation] = useState([]);
  const [dataPunctuation2, setDataPunctuation2] = useState([]);
  const [dataSpelling, setDataSpelling] = useState([]);

  useEffect(() => {
    setData(TheSentence);
    setDataNouns(PartsOfSpeechNouns);
    setDataVerbs(PartsOfSpeechVerbs);
    setDataPrep(PrepositionalPhrase);
    setDataComplements(Complements);
    setDataAgreements(Agreement);
    setDataUsingVerbs(UsingVerbs);
    setDataPronouns(Pronouns);
    setDataModifiers(Modifiers);
    setDataGlossary(Glossary);
    setDataCapitals(Capitals);
    setDataPunctuation(Punctuation);
    setDataPunctuation2(Punctuation2);
    setDataSpelling(Spelling);
  }, []);

  return (
    <>
      <div className="table-container">
        <TableBanner data={data} />
        <section className="two-columns">
          <InteractiveGrammarElements data={data} className="interactive" />
          <AdditionalResources data={data} className="additional" />
        </section>
      </div>
      <div className="table-container">
        <TableBanner data={dataNouns} />
        <section className="two-columns">
          <InteractiveGrammarElements
            data={dataNouns}
            className="interactive"
          />
          <AdditionalResources data={dataNouns} className="additional" />
        </section>
      </div>
      <div className="table-container">
        <TableBanner data={dataVerbs} />
        <section className="two-columns">
          <InteractiveGrammarElements
            data={dataVerbs}
            className="interactive"
          />
          <AdditionalResources data={dataVerbs} className="additional" />
        </section>
      </div>
      <div className="table-container">
        <TableBanner data={dataPrep} />
        <section className="two-columns">
          <InteractiveGrammarElements data={dataPrep} className="interactive" />
          <AdditionalResources data={dataPrep} className="additional" />
        </section>
      </div>
      <div className="table-container">
        <TableBanner data={dataComplements} />
        <section className="two-columns">
          <InteractiveGrammarElements
            data={dataComplements}
            className="interactive"
          />
          <AdditionalResources data={dataComplements} className="additional" />
        </section>
      </div>
      <div className="table-container">
        <TableBanner data={dataAgreements} />
        <section className="two-columns">
          <InteractiveGrammarElements
            data={dataAgreements}
            className="interactive"
          />
          <AdditionalResources data={dataAgreements} className="additional" />
        </section>
      </div>
      <div className="table-container">
        <TableBanner data={dataUsingVerbs} />
        <section className="two-columns">
          <InteractiveGrammarElements
            data={dataUsingVerbs}
            className="interactive"
          />
          <AdditionalResources data={dataUsingVerbs} className="additional" />
        </section>
      </div>
      <div className="table-container">
        <TableBanner data={dataPronouns} />
        <section className="two-columns">
          <InteractiveGrammarElements
            data={dataPronouns}
            className="interactive"
          />
          <AdditionalResources data={dataPronouns} className="additional" />
        </section>
      </div>
      <div className="table-container">
        <TableBanner data={dataModifiers} />
        <section className="two-columns">
          <InteractiveGrammarElements
            data={dataModifiers}
            className="interactive"
          />
          <AdditionalResources data={dataModifiers} className="additional" />
        </section>
      </div>
      <div className="table-container">
        <TableBanner data={dataGlossary} />
        <section className="two-columns">
          <InteractiveGrammarElements
            data={dataGlossary}
            className="interactive"
          />
          <AdditionalResources data={dataGlossary} className="additional" />
        </section>
      </div>
      <div className="table-container">
        <TableBanner data={dataCapitals} />
        <section className="two-columns">
          <InteractiveGrammarElements
            data={dataCapitals}
            className="interactive"
          />
          <AdditionalResources data={dataCapitals} className="additional" />
        </section>
      </div>
      <div className="table-container">
        <TableBanner data={dataPunctuation} />
        <section className="two-columns">
          <InteractiveGrammarElements
            data={dataPunctuation}
            className="interactive"
          />
          <AdditionalResources data={dataPunctuation} className="additional" />
        </section>
      </div>
      <div className="table-container">
        <TableBanner data={dataPunctuation2} />
        <section className="two-columns">
          <InteractiveGrammarElements
            data={dataPunctuation2}
            className="interactive"
          />
          <AdditionalResources data={dataPunctuation2} className="additional" />
        </section>
      </div>
      <div className="table-container bottom">
        <TableBanner data={dataSpelling} />
        <section className="two-columns">
          <InteractiveGrammarElements
            data={dataSpelling}
            className="interactive"
          />
          <AdditionalResources data={dataSpelling} className="additional" />
        </section>
      </div>
    </>
  );
};

export default SentenceModule;
