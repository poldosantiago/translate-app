import './app.css';
import logo from './logo.svg';
import TranslatePanel from './components/translate-panel/index.js';
import React, { useState } from 'react';

function App() {

  const [sourceText, setSourceText] = useState('Hello, how are you?');
  const [translation, setTranslation] = useState('Bonjour comment allez-vous?');

  return (
    <div className='page_content'>
      <img src={logo} alt="" className="logo" />
      
      <div className='panel_content'>
        <TranslatePanel translationPanel={false} text={sourceText}/>
        <TranslatePanel translationPanel={true} text={translation}/>
      </div>
    </div>
  );
}

export default App;
