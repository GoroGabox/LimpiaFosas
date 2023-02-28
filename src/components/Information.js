import '../css/style.css'

function Information() {
    return (
      <div id='information' className="information">
        <div className="information-container">
          <img src={require("../assets/worker.png")} alt="" className="information-img"/>
          <div className="information-text">
            <h3 className="information-text-title">¿Quienes Somos?</h3>
            <div className="information-text-subtitle">
            SOMOS ESPECIALISTAS EN LIMPIEZA DE FOSAS Y ALCANTARILLADOS
            </div>
            <p className="information-text-p">Somos un equipo familiar que nos dedicamos desde 1998 al área de limpieza de aguas servidas. Contámos con la especialización y conocimientos necesarios para brindar servicios integrales y soluciones a sus requerimientos.</p>
          </div>
        </div>
      </div>
    );
  }
  
  export default Information;