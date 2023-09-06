import DestinationData from "./DestinationData";
import "./DestinationStyle.css"

const Destination = () => {
    return (
        <div className="destination">
            <h1>Popular Destination</h1>
            <p>tour gives opportunity to see lots</p>
           <DestinationData
           className="first-des"
           heading=" tal volcano batangas"
           text1=" Taal Volcano : is a large caldera filled by Taal Lake in the Philippines.[1] Located in the province of Batangas about 50 kilometers (31 mi) south of Manila, the volcano is the second most active volcano in the country with 38 recorded historical eruptions, all of which were concentrated on Volcano Island, near the middle of Taal Lake.[3] The caldera was formed by prehistoric eruptions between 140,000 and 5,380"
           img1="https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW91bnRhaW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
           img2="https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW91bnRhaW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"/>
           <DestinationData
           className="first-des-reverse"
           heading=" mount lawvu"
           text1=" The Lawu (Javanese: ꦭꦮꦸ), or Mount Lawu (Javanese: ꦒꦸꦤꦸꦁ​​ꦭꦮꦸ, romanized: Gunung Lawu) is a massive compound stratovolcano straddling the border between Ngawi, East Java and Central Java, Indonesia. The north side is deeply eroded and the eastern side contains parasitic crater lakes and parasitic cones. A fumarolic area is located on the south flank at 2,550 m. The only reported activity of Lawu took place in 1885, when rumblings and light volcanic ash falls were reported.[1] The recent study provided insights into geothermal heat flow suggesting that Mt. Lawu is still active today.[3]"
           img1="https://media.istockphoto.com/id/170464921/photo/beautiful-sunrise-at-misty-morning-mountains.webp?b=1&s=170667a&w=0&k=20&c=YbB0BN4lX8d9ohdaqCk4taz9mubqaSaZieGiBdYOplU="
           img2="https://media.istockphoto.com/id/938335974/photo/aerial-view-of-kualoa-area-of-oahu-hawaii.webp?b=1&s=170667a&w=0&k=20&c=ns4dBIVWHwuLez8b3A13qA-gEeFQ8uTnWTgI4W91zcY="/>
           
        </div>
    )
}

export default Destination;
