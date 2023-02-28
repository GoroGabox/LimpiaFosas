import NavBar from "../components/NavBar";
import Home from "../components/Home";
import Information from "../components/Information";
import Services from "../components/Services";
import Contact from "../components/Contact";
import GoUp from "../components/GoUpButton";
import WhatsApp from "../components/WhatsAppButton";
import '../App.css';

function LandingPage() {
    const style = {
        height:'100vh',
        textAlign: 'center',
      }

    return (
        <>
        <NavBar/>
        <div className="hero-background">
            <Home style={style} className="home"/>
            <div className="hero">
                <Information className="information"/>
                <Services className="services"/>
                <GoUp/>
                <WhatsApp/>
            </div>
            <Contact className="contact"/>
        </div>
        </>
    );
}

export default LandingPage;