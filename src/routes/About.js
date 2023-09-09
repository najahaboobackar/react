// Importing necessary components and assets
import Navbar from "../components/navbar";
import Hero from "../components/Hero";
import AboutImg from '../assets/travel3.jfif';
import Footer from "../components/footer";
import Aboutus from "../components/Aboutus";

function About() {
    return (
        <>
            
            <Navbar />

            
            <Hero
                cname="hero-mid"    
                heroimg={AboutImg}     
                title="About"
         
                buttontext="travel"
                url="/"               
                btnClass="hide"       
            />
            <Aboutus/>
            <Footer/>
        </>
    );
}

// Exporting the About component to be used elsewhere in the application
export default About;
