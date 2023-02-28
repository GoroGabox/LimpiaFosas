import '../css/style.css'

function GoUp() {
    const style = {
        display:'flex',
        justifyContent:'end',
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        margin: '0 10px'
    }

    return (
      <a style={style} href="#navbar">
        <img src={require('../assets/up-arrow.png')} className='goUp-img' alt=""/>
      </a>
    );
  }
  
  export default GoUp;