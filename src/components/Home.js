import '../css/style.css'

function Home({style}) {


    return (
      <div style={style} id='home' className='home-container'>
        <div className="title-container">
          <h3 className='title'>Limpia Fosas <br/>Central</h3>
          <p className='slogan'>
            "La limpieza es nuestra especialidad, tu satisfacción nuestro compromiso"
          </p>
        </div>
      </div>
    );
  }
  
  export default Home;