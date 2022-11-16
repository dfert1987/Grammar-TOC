import React, { useState, useEffect } from 'react';
import TableBanner from './TableElements/TableBanner';
import InteractiveGrammarElements from './TableElements/InteractiveGrammarElements';
import AdditionalResources from './TableElements/AdditionalResources';
import { gradeLevel } from '../constants';
import { TheSentence } from '../Assets/Data/G6/TheSentence';
import { PartsOfSpeechNouns } from '../Assets/Data/G6/PartsOfSpeechNouns';
import { PartsOfSpeechVerbs } from '../Assets/Data/G6/PartsOfSpeechVerbs';
import { PrepositionalPhrase } from '../Assets/Data/G6/PrepositionalPhrase';
import { Complements } from '../Assets/Data/G6/Complements';
import { Agreement } from '../Assets/Data/G6/Agreement';
import { UsingVerbs } from '../Assets/Data/G6/UsingVerbs';
import { Pronouns } from '../Assets/Data/G6/Pronouns';
import { Modifiers } from '../Assets/Data/G6/Modifiers';
import { Glossary } from '../Assets/Data/G6/Glossary';
import { Capitals } from '../Assets/Data/G6/Capitals';
import { Punctuation } from '../Assets/Data/G6/Punctuation';
import { Punctuation2 } from '../Assets/Data/G6/Punctuation2';
import { Spelling } from '../Assets/Data/G6/Spelling';
import { AgreementG7 } from '../Assets/Data/G7/Agreement';
import { CapitalsG7 } from '../Assets/Data/G7/Capitals';
import { ClauseG7 } from '../Assets/Data/G7/Clause';
import { ComplementsG7 } from '../Assets/Data/G7/Complements';
import { GlossaryG7 } from '../Assets/Data/G7/Glossary';
import { PhraseG7 } from '../Assets/Data/G7/Phrase';
import { POSNounsG7 } from '../Assets/Data/G7/POSNouns';
import { POSVerbsG7 } from '../Assets/Data/G7/POSVerbs';
import { PunctuationG7 } from '../Assets/Data/G7/Punctuation';
import { PunctuationIIG7 } from '../Assets/Data/G7/PunctuationII';
import { SentenceG7 } from '../Assets/Data/G7/Sentence';
import { SentenceStructureG7 } from '../Assets/Data/G7/SentenceStructure';
import { SpellingG7 } from '../Assets/Data/G7/Spelling';
import { UsingModifiersG7 } from '../Assets/Data/G7/UsingModifiers';
import { UsingPronounsG7 } from '../Assets/Data/G7/UsingPronouns';
import { UsingVerbsG7 } from '../Assets/Data/G7/UsingVerbs';
import { AgreementG8 } from '../Assets/Data/G8/Agreement';
import { CapitalsG8 } from '../Assets/Data/G8/Capitals';
import { ClauseG8 } from '../Assets/Data/G8/Clause';
import { ComplementsG8 } from '../Assets/Data/G8/Complements';
import { GlossaryG8 } from '../Assets/Data/G8/Glossary';
import { ModifiersG8 } from '../Assets/Data/G8/Modifiers';
import { PhraseG8 } from '../Assets/Data/G8/Phrase';
import { POSIG8 } from '../Assets/Data/G8/POSI';
import { POSIIG8 } from '../Assets/Data/G8/POSII';
import { PronounsG8 } from '../Assets/Data/G8/Pronouns';
import { PunctuationIG8 } from '../Assets/Data/G8/PunctuationI';
import { PunctuationIIG8 } from '../Assets/Data/G8/PunctuationII';
import { SentenceG8 } from '../Assets/Data/G8/Sentence';
import { SpellingG8 } from '../Assets/Data/G8/Spelling';
import { StructureG8 } from '../Assets/Data/G8/Structure';
import { VerbsG8 } from '../Assets/Data/G8/Verbs';
import { AgreementG9 } from '../Assets/Data/G9/Agreement';
import { CapitalsG9 } from '../Assets/Data/G9/Capitals';
import { ClauseG9 } from '../Assets/Data/G9/Clause';
import { GlossaryG9 } from '../Assets/Data/G9/Glossary';
import { ModifiersG9 } from '../Assets/Data/G9/Modifiers';
import { PhraseG9 } from '../Assets/Data/G9/Phrase';
import { POSG9 } from '../Assets/Data/G9/POS';
import { PronounsG9 } from '../Assets/Data/G9/Pronouns';
import { PunctuationG9 } from '../Assets/Data/G9/Punctuation';
import { SentenceG9 } from '../Assets/Data/G9/Sentence';
import { SpellingG9 } from '../Assets/Data/G9/Spelling';
import { VerbsG9 } from '../Assets/Data/G9/Verbs';
import { PunctuationIIG9 } from '../Assets/Data/G9/PunctuationII';
import { AgreementG10 } from '../Assets/Data/G10/Agreement';
import { CapitalsG10 } from '../Assets/Data/G10/Capitals';
import { ClauseG10 } from '../Assets/Data/G10/Clause';
import { GlossaryG10 } from '../Assets/Data/G10/Glossary';
import { ModifiersG10 } from '../Assets/Data/G10/Modifiers';
import { PhraseG10 } from '../Assets/Data/G10/Phrase';
import { POSG10 } from '../Assets/Data/G10/POS';
import { PronounsG10 } from '../Assets/Data/G10/Pronouns';
import { PunctuationG10 } from '../Assets/Data/G10/Punctuation';
import { PunctuationIIG10 } from '../Assets/Data/G10/PunctuationII';
import { SentenceG10 } from '../Assets/Data/G10/Sentence';
import { SpellingG10 } from '../Assets/Data/G10/Spelling';
import { VerbsG10 } from '../Assets/Data/G10/Verbs';
import { AgreementG11 } from '../Assets/Data/G11/Agreement';
import { CapitalsG11 } from '../Assets/Data/G11/Capitals';
import { ClauseG11 } from '../Assets/Data/G11/Clause';
import { ClearG11 } from '../Assets/Data/G11/Clear';
import { GlossaryG11 } from '../Assets/Data/G11/Glossary';
import { PhraseG11 } from '../Assets/Data/G11/Phrase';
import { PModsG11 } from '../Assets/Data/G11/PMods';
import { POSG11 } from '../Assets/Data/G11/POS';
import { PronounsG11 } from '../Assets/Data/G11/Pronouns';
import { PunctuationG11 } from '../Assets/Data/G11/Punctuation';
import { PunctuationIIG11 } from '../Assets/Data/G11/PunctuationII';
import { SentenceG11 } from '../Assets/Data/G11/Sentence';
import { SpellingG11 } from '../Assets/Data/G11/Spelling';
import { UModsG11 } from '../Assets/Data/G11/UMods';
import { VerbsG11 } from '../Assets/Data/G11/Verbs';
import { AgreementG12 } from '../Assets/Data/G12/Agreement';
import { CapitalsG12 } from '../Assets/Data/G12/Capitals';
import { ClauseG12 } from '../Assets/Data/G12/Clause';
import { ClearG12 } from '../Assets/Data/G12/Clear';
import { GlossaryG12 } from '../Assets/Data/G12/Glossary';
import { PhraseG12 } from '../Assets/Data/G12/Phrase';
import { PModsG12 } from '../Assets/Data/G12/PMods';
import { POSG12 } from '../Assets/Data/G12/POS';
import { PronounsG12 } from '../Assets/Data/G12/Pronouns';
import { PunctuationG12 } from '../Assets/Data/G12/Punctuation';
import { PunctuationIIG12 } from '../Assets/Data/G12/PunctuationII';
import { SentenceG12 } from '../Assets/Data/G12/Sentence';
import { SpellingG12 } from '../Assets/Data/G12/Spelling';
import { UModsG12 } from '../Assets/Data/G12/UMods';
import { VerbsG12 } from '../Assets/Data/G12/Verbs';
import '../Styles/Table.css';

const SentenceModule = () => {
    const [data, setData] = useState([]);
    const [dataNouns, setDataNouns] = useState([]);
    const [dataVerbs, setDataVerbs] = useState([]);
    const [dataPartsOfSpeech, setDataPartsOfSpeech] = useState([]);
    const [dataPrep, setDataPrep] = useState([]);
    const [dataComplements, setDataComplements] = useState([]);
    const [dataAgreements, setDataAgreements] = useState([]);
    const [dataUsingVerbs, setDataUsingVerbs] = useState([]);
    const [dataUsingPronouns, setDataUsingPronouns] = useState([]);
    const [dataUsingModifiers, setDataUsingModifiers] = useState([]);
    const [dataGlossary, setDataGlossary] = useState([]);
    const [dataCapitals, setDataCapitals] = useState([]);
    const [dataPunctuation, setDataPunctuation] = useState([]);
    const [dataPunctuation2, setDataPunctuation2] = useState([]);
    const [dataSpelling, setDataSpelling] = useState([]);
    const [dataClause, setDataClause] = useState([]);
    const [dataPhrase, setDataPhrase] = useState([]);
    const [dataSentenceStructure, setDataSentenceStructure] = useState([]);
    const [dataClear, setDataClear] = useState([]);
    const [dataPlacementModifiers, setDataPlacementModifiers] = useState([]);

    useEffect(() => {
        if (gradeLevel === 6) {
            setData(TheSentence);
            setDataNouns(PartsOfSpeechNouns);
            setDataVerbs(PartsOfSpeechVerbs);
            setDataPrep(PrepositionalPhrase);
            setDataComplements(Complements);
            setDataAgreements(Agreement);
            setDataUsingVerbs(UsingVerbs);
            setDataUsingPronouns(Pronouns);
            setDataUsingModifiers(Modifiers);
            setDataGlossary(Glossary);
            setDataCapitals(Capitals);
            setDataPunctuation(Punctuation);
            setDataPunctuation2(Punctuation2);
            setDataSpelling(Spelling);
        } else if (gradeLevel === 7) {
            setDataAgreements(AgreementG7);
            setDataCapitals(CapitalsG7);
            setDataClause(ClauseG7);
            setDataComplements(ComplementsG7);
            setDataGlossary(GlossaryG7);
            setDataPhrase(PhraseG7);
            setDataNouns(POSNounsG7);
            setDataVerbs(POSVerbsG7);
            setDataPunctuation(PunctuationG7);
            setDataPunctuation2(PunctuationIIG7);
            setData(SentenceG7);
            setDataSpelling(SpellingG7);
            setDataUsingModifiers(UsingModifiersG7);
            setDataUsingPronouns(UsingPronounsG7);
            setDataUsingVerbs(UsingVerbsG7);
            setDataSentenceStructure(SentenceStructureG7);
        } else if (gradeLevel === 8) {
            setDataAgreements(AgreementG8);
            setDataCapitals(CapitalsG8);
            setDataClause(ClauseG8);
            setDataComplements(ComplementsG8);
            setDataGlossary(GlossaryG8);
            setDataUsingModifiers(ModifiersG8);
            setDataPhrase(PhraseG8);
            setDataNouns(POSIG8);
            setDataVerbs(POSIIG8);
            setDataUsingPronouns(PronounsG8);
            setDataPunctuation(PunctuationIG8);
            setDataPunctuation2(PunctuationIIG8);
            setDataSpelling(SentenceG8);
            setData(SentenceG8);
            setDataSentenceStructure(StructureG8);
            setDataSpelling(SpellingG8);
            setDataUsingVerbs(VerbsG8);
        } else if (gradeLevel === 9) {
            setDataAgreements(AgreementG9);
            setDataCapitals(CapitalsG9);
            setDataClause(ClauseG9);
            setDataGlossary(GlossaryG9);
            setDataUsingModifiers(ModifiersG9);
            setDataPhrase(PhraseG9);
            setDataPartsOfSpeech(POSG9);
            setDataUsingPronouns(PronounsG9);
            setDataPunctuation(PunctuationG9);
            setDataPunctuation2(PunctuationIIG9);
            setData(SentenceG9);
            setDataSpelling(SpellingG9);
            setDataUsingVerbs(VerbsG9);
        } else if (gradeLevel === 10) {
            setDataAgreements(AgreementG10);
            setDataCapitals(CapitalsG10);
            setDataClause(ClauseG10);
            setDataGlossary(GlossaryG10);
            setDataUsingModifiers(ModifiersG10);
            setDataPhrase(PhraseG10);
            setDataPartsOfSpeech(POSG10);
            setDataUsingPronouns(PronounsG10);
            setDataPunctuation(PunctuationG10);
            setDataPunctuation2(PunctuationIIG10);
            setData(SentenceG10);
            setDataSpelling(SpellingG10);
            setDataUsingVerbs(VerbsG10);
        } else if (gradeLevel === 11) {
            setDataAgreements(AgreementG11);
            setDataCapitals(CapitalsG11);
            setDataClause(ClauseG11);
            setDataClear(ClearG11);
            setDataGlossary(GlossaryG11);
            setDataPhrase(PhraseG11);
            setDataPlacementModifiers(PModsG11);
            setDataUsingModifiers(UModsG11);
            setDataPartsOfSpeech(POSG11);
            setDataUsingPronouns(PronounsG11);
            setDataPunctuation(PunctuationG11);
            setDataPunctuation2(PunctuationIIG11);
            setData(SentenceG11);
            setDataSpelling(SpellingG11);
            setDataUsingModifiers(UModsG11);
            setDataUsingVerbs(VerbsG11);
        } else if (gradeLevel === 12) {
            setDataAgreements(AgreementG12);
            setDataCapitals(CapitalsG12);
            setDataClause(ClauseG12);
            setDataClear(ClearG12);
            setDataGlossary(GlossaryG12);
            setDataPhrase(PhraseG12);
            setDataPlacementModifiers(PModsG12);
            setDataPartsOfSpeech(POSG12);
            setDataUsingPronouns(PronounsG12);
            setDataPunctuation(PunctuationG12);
            setDataPunctuation2(PunctuationIIG12);
            setData(SentenceG12);
            setDataSpelling(SpellingG12);
            setDataUsingModifiers(UModsG12);
            setDataUsingVerbs(VerbsG12);
        }
    }, []);

    return (
        <div className='whole-table'>
            {data.length ? (
                <table className='table-container'>
                    <TableBanner data={data} />
                    <tbody className='two-columns'>
                        <InteractiveGrammarElements
                            data={data}
                            className='interactive'
                        />
                        <AdditionalResources
                            data={data}
                            className='additional'
                        />
                    </tbody>
                </table>
            ) : null}
            {dataNouns.length ? (
                <table className='table-container'>
                    <TableBanner data={dataNouns} />
                    <section className='two-columns'>
                        <InteractiveGrammarElements
                            data={dataNouns}
                            className='interactive'
                        />
                        <AdditionalResources
                            data={dataNouns}
                            className='additional'
                        />
                    </section>
                </table>
            ) : null}
            {dataVerbs.length ? (
                <table className='table-container'>
                    <TableBanner data={dataVerbs} />
                    <section className='two-columns'>
                        <InteractiveGrammarElements
                            data={dataVerbs}
                            className='interactive'
                        />
                        <AdditionalResources
                            data={dataVerbs}
                            className='additional'
                        />
                    </section>
                </table>
            ) : null}
            {dataPartsOfSpeech.length ? (
                <table className='table-container'>
                    <TableBanner data={dataPartsOfSpeech} />
                    <section className='two-columns'>
                        <InteractiveGrammarElements
                            data={dataPartsOfSpeech}
                            className='interactive'
                        />
                        <AdditionalResources
                            data={dataPartsOfSpeech}
                            className='additional'
                        />
                    </section>
                </table>
            ) : null}
            {dataPrep.length ? (
                <table className='table-container'>
                    <TableBanner data={dataPrep} />
                    <section className='two-columns'>
                        <InteractiveGrammarElements
                            data={dataPrep}
                            className='interactive'
                        />
                        <AdditionalResources
                            data={dataPrep}
                            className='additional'
                        />
                    </section>
                </table>
            ) : null}
            {dataComplements.length ? (
                <table className='table-container'>
                    <TableBanner data={dataComplements} />
                    <section className='two-columns'>
                        <InteractiveGrammarElements
                            data={dataComplements}
                            className='interactive'
                        />
                        <AdditionalResources
                            data={dataComplements}
                            className='additional'
                        />
                    </section>
                </table>
            ) : null}
            {dataPhrase.length ? (
                <table className='table-container'>
                    <TableBanner data={dataPhrase} />
                    <section className='two-columns'>
                        <InteractiveGrammarElements
                            data={dataPhrase}
                            className='interactive'
                        />
                        <AdditionalResources
                            data={dataPhrase}
                            className='additional'
                        />
                    </section>
                </table>
            ) : null}
            {dataClause.length ? (
                <table className='table-container'>
                    <TableBanner data={dataClause} />
                    <section className='two-columns'>
                        <InteractiveGrammarElements
                            data={dataClause}
                            className='interactive'
                        />
                        <AdditionalResources
                            data={dataClause}
                            className='additional'
                        />
                    </section>
                </table>
            ) : null}
            {dataSentenceStructure.length ? (
                <table className='table-container'>
                    <TableBanner data={dataSentenceStructure} />
                    <section className='two-columns'>
                        <InteractiveGrammarElements
                            data={dataSentenceStructure}
                            className='interactive'
                        />
                        <AdditionalResources
                            data={dataSentenceStructure}
                            className='additional'
                        />
                    </section>
                </table>
            ) : null}
            {dataAgreements.length ? (
                <table className='table-container'>
                    <TableBanner data={dataAgreements} />
                    <section className='two-columns'>
                        <InteractiveGrammarElements
                            data={dataAgreements}
                            className='interactive'
                        />
                        <AdditionalResources
                            data={dataAgreements}
                            className='additional'
                        />
                    </section>
                </table>
            ) : null}
            {dataClear.length ? (
                <table className='table-container'>
                    <TableBanner data={dataClear} />
                    <section className='two-columns'>
                        <InteractiveGrammarElements
                            data={dataClear}
                            className='interactive'
                        />
                        <AdditionalResources
                            data={dataClear}
                            className='additional'
                        />
                    </section>
                </table>
            ) : null}
            {dataUsingVerbs.length ? (
                <table className='table-container'>
                    <TableBanner data={dataUsingVerbs} />
                    <section className='two-columns'>
                        <InteractiveGrammarElements
                            data={dataUsingVerbs}
                            className='interactive'
                        />
                        <AdditionalResources
                            data={dataUsingVerbs}
                            className='additional'
                        />
                    </section>
                </table>
            ) : null}
            {dataUsingPronouns.length ? (
                <table className='table-container'>
                    <TableBanner data={dataUsingPronouns} />
                    <section className='two-columns'>
                        <InteractiveGrammarElements
                            data={dataUsingPronouns}
                            className='interactive'
                        />
                        <AdditionalResources
                            data={dataUsingPronouns}
                            className='additional'
                        />
                    </section>
                </table>
            ) : null}
            {dataUsingModifiers.length ? (
                <table className='table-container'>
                    <TableBanner data={dataUsingModifiers} />
                    <section className='two-columns'>
                        <InteractiveGrammarElements
                            data={dataUsingModifiers}
                            className='interactive'
                        />
                        <AdditionalResources
                            data={dataUsingModifiers}
                            className='additional'
                        />
                    </section>
                </table>
            ) : null}
            {dataPlacementModifiers.length ? (
                <table className='table-container'>
                    <TableBanner data={dataPlacementModifiers} />
                    <section className='two-columns'>
                        <InteractiveGrammarElements
                            data={dataPlacementModifiers}
                            className='interactive'
                        />
                        <AdditionalResources
                            data={dataPlacementModifiers}
                            className='additional'
                        />
                    </section>
                </table>
            ) : null}
            {dataGlossary.length ? (
                <table className='table-container'>
                    <TableBanner data={dataGlossary} />
                    <section className='two-columns'>
                        <InteractiveGrammarElements
                            data={dataGlossary}
                            className='interactive'
                        />
                        <AdditionalResources
                            data={dataGlossary}
                            className='additional'
                        />
                    </section>
                </table>
            ) : null}
            {dataCapitals.length ? (
                <table className='table-container'>
                    <TableBanner data={dataCapitals} />
                    <section className='two-columns'>
                        <InteractiveGrammarElements
                            data={dataCapitals}
                            className='interactive'
                        />
                        <AdditionalResources
                            data={dataCapitals}
                            className='additional'
                        />
                    </section>
                </table>
            ) : null}
            {dataPunctuation.length ? (
                <table className='table-container'>
                    <TableBanner data={dataPunctuation} />
                    <section className='two-columns'>
                        <InteractiveGrammarElements
                            data={dataPunctuation}
                            className='interactive'
                        />
                        <AdditionalResources
                            data={dataPunctuation}
                            className='additional'
                        />
                    </section>
                </table>
            ) : null}
            {dataPunctuation2.length ? (
                <table className='table-container'>
                    <TableBanner data={dataPunctuation2} />
                    <section className='two-columns'>
                        <InteractiveGrammarElements
                            data={dataPunctuation2}
                            className='interactive'
                        />
                        <AdditionalResources
                            data={dataPunctuation2}
                            className='additional'
                        />
                    </section>
                </table>
            ) : null}
            {dataSpelling.length ? (
                <table className='table-container bottom'>
                    <TableBanner data={dataSpelling} />
                    <section className='two-columns'>
                        <InteractiveGrammarElements
                            data={dataSpelling}
                            className='interactive'
                        />
                        <AdditionalResources
                            data={dataSpelling}
                            className='additional'
                        />
                    </section>
                </table>
            ) : null}
        </div>
    );
};

export default SentenceModule;
