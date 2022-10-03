import React from 'react';
import Banner from './Components/Banner';
import Intro from './Components/Intro';
import SentenceModule from './Components/Modules';
import './Styles/App.css';

function App() {
    return (
        <div className='main' id='main' role='main'>
            <Banner />
            <Intro />
            <SentenceModule />
        </div>
    );
}

export default App;
