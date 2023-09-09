// Importing necessary components and assets
import Navbar from "../components/navbar";
import Hero from "../components/Hero";
import AboutImg from '../assets/travel4.jpg';
import Footer from "../components/footer";
import ContactF from "../components/contactform";

function Contact() {
    return (
        <>
            
            <Navbar />

            
            <Hero
                cname="hero-mid"    
                heroimg={AboutImg}     
                title="Contact"
         
                buttontext="travel"
                url="/"               
                btnClass="hide"       
            />
            <ContactF/>
            <Footer/>
        </>
    );
}

// Exporting the About component to be used elsewhere in the application
export default Contact;
