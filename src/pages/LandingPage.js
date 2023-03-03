import NavBar from "../components/NavBar";
import Home from "../components/Home";
import Information from "../components/Information";
import Services from "../components/Services";
import Contact from "../components/Contact";
import WhatsApp from "../components/WhatsAppButton";

function LandingPage() {
    const style = {
        height:'80vh',
        textAlign: 'center',
      }

    return (
        <>
        <NavBar/>
        <div className="hero-background">
            <Home style={style} className="home"/>
            <Services className="services"/>
            <Information className="information"/>
            <WhatsApp/>
            <Contact className="contact"/>
        </div>
        </>
    );
}

export default LandingPage;