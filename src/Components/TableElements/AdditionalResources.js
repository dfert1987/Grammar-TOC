import React from 'react';
import GrammarQuickFix from './GrammarQuickFix';
import GrammarAssessments from './GrammarAssessments';
import EditablePractice from './EditablePractice';
import LevelUpTutorials from './LevelUpTutorials';
import LevelUpPractice from './LevelUpPractice';
import '../../Styles/Table.css';

const AdditionalResources = ({ data }) => {
    return (
        <div className='additional-container'>
            <header className='column-header right'>
                <h4 className='column-header-text'>Additional Resources</h4>
            </header>
            <section className='right-list'>
                <GrammarQuickFix data={data} />
                <GrammarAssessments data={data} />
                <EditablePractice data={data} />
                <LevelUpTutorials data={data} />
                <LevelUpPractice data={data} />
            </section>
        </div>
    );
};

export default AdditionalResources;
