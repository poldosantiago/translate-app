import './ButtonLanguage.css';

function ButtonLanguage({children, lbIsActive, setLbActive}) {
    return ( 
        <button 
            className={lbIsActive ? '--selected':''}
            onClick={setLbActive}
        >
            {children}
        </button>
     );
}

export default ButtonLanguage;