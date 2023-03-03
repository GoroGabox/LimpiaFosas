import '../css/style.css'
import { CardList } from './CardList';
import { MyCard } from './Card';

const services = [
  {name:'Limpieza de fosas',
  description:'Eliminamos los residuos acumulados en fosas sépticas, tanques de almacenamiento o pozos negros, para evitar obstrucciones y garantizar una eliminación adecuada de los residuos.',
  img:require('../assets/limpieza-fosa-septica.jpg')
  },
  {name:'Limpieza de baños quimicos',
  description:'Nos encargamos de la limpieza y desinfección de baños químicos portátiles o móviles, utilizando productos específicos para eliminar los residuos y los olores desagradables.',
  img:require('../assets/limpieza-fosa-septica.jpg')
  },
  {name:'Limpieza de tranques',
  description:'Eliminamos los residuos líquidos y sólidos acumulados en tranques de almacenamiento de agua, aceite u otros líquidos, utilizando equipos y productos especializados para garantizar una limpieza eficiente y segura.',
  img:require('../assets/limpieza-fosa-septica.jpg')
  },
  {name:'Limpieza de camara desbrozadora',
  description:'Limpiamos las cámaras de las desbrozadoras utilizadas en el mantenimiento de áreas verdes y jardines, utilizando equipos especializados y productos específicos para eliminar los residuos acumulados en estas cámaras.',
  img:require('../assets/limpieza-fosa-septica.jpg')
  },
  {name:'Limpieza de planta elevadora',
  description:'Limpiamos las plantas elevadoras de aguas residuales para mantener su funcionamiento óptimo y evitar obstrucciones, utilizando equipos especializados y productos específicos para garantizar una limpieza eficiente y segura.',
  img:require('../assets/limpieza-fosa-septica.jpg')
  },
  {name:'Instalacion de fosas y drenajes',
  description:'Nos encargamos de la instalación de fosas sépticas, pozos negros o drenajes en hogares o empresas, utilizando materiales de alta calidad para garantizar su durabilidad y un diseño óptimo que se ajuste a las necesidades del cliente.',
  img:require('../assets/limpieza-fosa-septica.jpg')
  },
  {name:'Destapes de alcantarillado: cañon Hidro-Jet',
  description:'Eliminamos las obstrucciones en el alcantarillado utilizando un cañón Hidro-Jet, que utiliza agua a alta presión para desbloquear y limpiar las tuberías, lo que permite un flujo de agua adecuado y evita posibles problemas de salud pública.',
  img:require('../assets/limpieza-fosa-septica.jpg')
  },
]

function Services() {

    return (
      <div id='services' className='services'>
        <h2 className='services-title'>Servicios</h2>
        <div className="services-container">
          <CardList
            items={services}
            resourceName="service"
            itemComponent={MyCard}
          />
        </div>
        <div className="services-text-container">
          <div className="services-text-card">
            <div className="services-icon1 icon"></div>
            <div className="services-text">Ofrecemos servicios de limpieza y mantenimiento de fosas sépticas, baños químicos, tranques, cámaras desbrozadoras y plantas elevadoras de aguas residuales.</div>
          </div>
          <div className="services-text-card">
            <div className="services-icon2 icon"></div>
            <div className="services-text">Instalamos fosas sépticas y drenajes, y realizamos destapes de alcantarillado mediante el uso de cañón Hidro-Jet.</div>
          </div>
          <div className="services-text-card">
            <div className="services-icon3 icon"></div>
            <div className="services-text">Todos nuestros servicios se realizan con equipos especializados y productos de alta calidad, y están diseñados para garantizar la eficiencia, seguridad y durabilidad de las instalaciones.</div>
          </div>
        </div>
        <div className="services-truck">
          <img src={require("../assets/LimpiaFosas.png")} alt="" className='truck-img'/>
          <p className=''>"Mantén tu hogar o empresa limpio y saludable con nuestros servicios de limpieza de fosas y tranques"</p>
        </div>
      </div>
    );
  }
  
  export default Services;