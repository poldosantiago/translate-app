import './ButtonImage.css';

function ButtonImage({img}) {
    return ( 
        <button className='buttonImage'>
            <img src={img} alt="teste" />
        </button>
     );
}

export default ButtonImage;