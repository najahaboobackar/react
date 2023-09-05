import Navbar from "../components/navbar";
import Hero from "../components/Hero";
import AboutImg from '../assets/travel3.jfif';

function About() {
    return (
        <>
            <h1>this is about</h1>
            <Navbar />
            <Hero
                cName="hero"
                heroimg={AboutImg} // Pass the imported image, not a string
                title="your journey your story"
                text="create your destination"
                buttontext="travel"
                url="/"
                btnClass="show"
            />
        </>
    );
}

export default About;
