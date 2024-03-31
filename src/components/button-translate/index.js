import './buttonTranslate.css';
import sortAlfa from './Sort_alfa.svg';

function ButtonTranslate() {
    return ( 
        <button className='button_translate'>
            <img src={sortAlfa} alt="aaaaaaaaa" />
            Translate
        </button>
     );
}

export default ButtonTranslate;