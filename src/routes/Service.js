// Importing necessary components and assets
import Navbar from "../components/navbar";
import Hero from "../components/Hero";
import AboutImg from '../assets/travel4.jpg';
import Footer from "../components/footer";
import Trip from "../components/trip";

function Service() {
    return (
        <>
            
            <Navbar />

            
            <Hero
                cname="hero-mid"    
                heroimg={AboutImg}     
                title="Service"
         
                buttontext="travel"
                url="/"               
                btnClass="hide"       
            />
            <Trip/>
            <Footer/>
        </>
    );
}

// Exporting the About component to be used elsewhere in the application
export default Service;
