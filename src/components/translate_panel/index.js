import React, { useState } from 'react';
import 'components/translate_panel/translatePanel.css';
import ButtonLanguage from 'components/button_language/index.js';
import ButtonImage from 'components/button_image/index.js';
import ButtonTranslate from 'components/button_translate/index.js';

//svg...
import imgHorizontalTopLeft from 'components/translate-panel/svg/horizontal_top_left_main.svg';
import soundMaxFill from 'components/translate-panel/svg/sound_max_fill.svg';
import copyImage from 'components/translate-panel/svg/copy.svg';

// import sortAlfa from 'components/translate-panel/svg/Sort_alfa.svg';

function TranslatePanel({translationPanel, text}) {
    
    const languageList = ['English','French','Spanish'];
    
    //apenas o primiero painel possui o título abaixo 
    if(!translationPanel){
        languageList.unshift('Detect Language');
    }


    const [lbActive, setLbActive] = useState(!translationPanel ? 0 : 1); //lbActive === languageButtonActive
    const [textAreaValue, setTextAreaValue] = useState(text);

    return (
        <div className={`panel ${translationPanel?'--translate':''}`}>
            <header className="language_options">
                <div className="content_button_language">
                    { 
                        languageList.map((language, index) => 
                            <ButtonLanguage 
                                lbIsActive={lbActive === index}
                                setLbActive={() => setLbActive(index)}
                                key={language}
                            >
                                {language}
                            </ButtonLanguage>)
                    }
                </div>
                {translationPanel &&
                    <ButtonImage img={imgHorizontalTopLeft}/>
                            
                }
            </header>

            <main>
                <textarea 
                    value={textAreaValue}
                    onChange={(e) => setTextAreaValue(e.target.value) }>
                </textarea>
                {!translationPanel &&
                    <span>{textAreaValue.length}/500</span>
                }
            </main>

            <div className='footer'>
                <div className="content_button_image">
                    <ButtonImage img={soundMaxFill}/>
                    <ButtonImage img={copyImage}/>  
                </div>

                {!translationPanel &&
                    <ButtonTranslate />
                }

            </div>
        </div>
     );
}

export default TranslatePanel;