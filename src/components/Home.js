import '../css/style.css'

function Home({style}) {


    return (
      <div style={style} id='home' className='home-container'>
        <div className="title-container">
          <h3 className='title'>Limpieza y <br/>Manejo<br/>Profesional de<br/>Residuos</h3>
          <p className='slogan'>
            "La limpieza es nuestra especialidad, tu satisfacción nuestro compromiso"
          </p>
        </div>
      </div>
    );
  }
  
  export default Home;