import { useState } from "react";
import { ReactComponent as WAWhithe} from "../assets/whatsapp-white.svg";
import { ReactComponent as WAGreen} from "../assets/whatsapp-green.svg";
import { ReactComponent as WAColor} from "../assets/whatsapp-color.svg";
import '../css/style.css'

function WhatsApp() {

    const url = '#'
    const [shouldShow, setShouldShow] = useState(false);
    const [iconShow, setIconShow] = useState(true);

    const ModalBackgound = {
    backgroundColor: '#ffffff',
    width: '20rem',
    height: '280px',
    overflow: 'auto',
    position: 'fixed',
    zIndex: '1',
    right: '30px',
    bottom: '160px',
    borderRadius:'15px'
    }
    const ModalUpper = {
        backgroundColor: '#55cd6c',
        color: '#fff',
        width: '100%',
        display: 'flex',
        padding:'3% 8%'
    }
    const ModalBottom = {
        width: '90%',
        margin: '0 auto',
    }
    const WAContainer = {
        display:'flex',
        justifyContent:'end',
        position: 'fixed',
        bottom: '90px',
        right: '30px',
        margin: '0 10px',
    }
    const WAImg = {
        width: '70%',
        height: '70%',
    }
    const CloseModal = {
        display: 'flex',
        justifyContent:'center',
        alignItems:'center',
        width: '60px',
        height: '60px',
        backgroundColor: '#55cd6c',
        borderRadius: '30px',
    }
    const CloseImg = {
        width: '70%',
        height: '70%',
    }
    const whiteText1 = {
        marginTop: '6%',
        color:'#b2b7c2',
        fontSize: '.8rem'
    }
    const innerBox = {
        display: 'flex',
        height: '73px',
        marginTop: '14px',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#f5f7f9',
        borderRadius: '7px',
        border: '1px solid',
        cursor: 'pointer',
        textDecoration: 'none'
    }
    const innerBoxText = {
        width: '196px',
        height: '48px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    }
    const innerBoxText1 = {
        fontSize: '14px',
        color: '#363c47',
        lineHeight: '1.188em !important',
    }
    const innerBoxText2 = {
        fontSize: '11px',
        color: '#989b9f',
        padding: '2px 0 0',
        lineHeight: '1.125em !important',
    }
    const innerBox_iconColor = {
        width: '56px',
        height: '56px',
    }
    const innerBox_iconGreen = {
        width: '20px',
        height: '20px',
    }

    return (
        <div style={WAContainer}>
            <div onClick={()=>{setShouldShow(!shouldShow); setIconShow(!iconShow)}} >
                {iconShow ? 
                    <div style={CloseModal} onClick={()=>setShouldShow(false)}>
                        <WAWhithe alt="" style={WAImg}/>
                    </div>
                     : 
                    <div style={CloseModal} onClick={()=>setShouldShow(false)}>
                        <img src={require('../assets/icon-multiplicar.png')} alt="" style={CloseImg}/>
                    </div>
                }
                
            </div>
            {shouldShow && (
                <div style={ModalBackgound}>
                    <div style={ModalUpper}>
                        <div style={{width: '60px',height: '60px'}} >
                            <WAWhithe alt="" style={WAImg}/>
                        </div>
                        <div>
                            <h3>Hablemos</h3>
                            <p>¡Hola! Habla con nuestro asesor de ventas por <strong>WhatsApp</strong></p>
                        </div>
                    </div>
                    <div style={ModalBottom}>
                        <p style={whiteText1}>El equipo suele responder en unos minutos.</p>
                        <a  href={url} style={innerBox}>
                        <WAColor alt="" style={innerBox_iconColor}/>
                        <div className="innerBox_text" style={innerBoxText}>
                            <p style={innerBoxText1}>Daniela O.- Asesora Admisión</p>
                            <p style={innerBoxText2}>Daniela Olivares</p>
                        </div>
                        <WAGreen alt="" style={innerBox_iconGreen}/>
                        </a>
                    </div>
                </div>
            )}
        </div>
    )
  }
  
  export default WhatsApp;