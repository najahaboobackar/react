import Navbar from '../components/navbar';
import Hero from '../components/Hero';

function Home(){
    return(
        <>
        <Navbar/>
         <Hero
         cName="hero"
         heroimg="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1474&q=80"
         title="your journey your story"
         text="create your destination"
         buttontext="travel"
         url="/"
         btnClass="show"/>
        </>
    )
}
export default Home;