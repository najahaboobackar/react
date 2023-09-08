import Navbar from '../components/navbar';
import Hero from '../components/Hero';
import Destination from '../components/Destination';
import Trip from '../components/trip';
import Footer from '../components/footer';

function Home(){
    return(
        <>
        <Navbar/>
         <Hero
         cname="hero"
         heroimg="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1474&q=80"
         title="your journey your story"
         text="create your destination"
         buttontext="travel"
         url="/"
         btnClass="show"/>
         <Destination/>
         <Trip/>
         <Footer/>
        </>
    )
}
export default Home;