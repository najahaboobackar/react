import "./tripstyle.css";
import TripData from "./tripdata";
import Trip1 from "../assets/travel4.jpg";

function Trip() {
    return(
        <div className="trip">
            <h1>Recent Trip</h1>
            
            
            <p>Explore the world</p>

            <div className="tripcard">
                <TripData image1={Trip1}
                heading ="trip in indonesia"
                text=" Indonesia, a vast Southeast Asian archipelago, boasts over 17,000 islands. Renowned for its diverse cultures, rich traditions, and deep history, it offers stunning beaches, majestic volcanoes, and lush rainforests. Home to Bali and Java, Indonesia's delicious cuisine and warm hospitality attract travelers worldwide." />
           <TripData image1=" https://media.istockphoto.com/id/847408280/photo/aerial-view-of-paris-with-eiffel-tower-during-sunset.webp?b=1&s=170667a&w=0&k=20&c=-kq0O3dWUCiAOMIC-pBCZTMJK2hHBeLc2Lk6Sb3o8mI="
                heading ="trip in paris"
                text=" Paris, the capital of France, often called the City of Love, enchants visitors with its iconic Eiffel Tower, historic Notre Dame, and world-class museums like the Louvre. Its charming boulevards, river Seine cruises, exquisite cuisine, and vibrant arts scene make it a must-visit global cultural hub." />
            <TripData image1=" https://media.istockphoto.com/id/1205249021/photo/lodnon-tower-bridge-at-evening.webp?b=1&s=170667a&w=0&k=20&c=3OosHi9ZSeShXu9tX13W3AfXEnCOwJNdPpup0668_Ik="
                heading ="trip in London"
                text=" London, the vibrant capital of the UK, seamlessly blends historic landmarks like the Tower of London and Westminster Abbey with modern marvels such as the Shard. Its rich cultural tapestry, iconic double-decker buses, bustling Thames River, renowned West End theatres, and diverse neighborhoods captivate visitors from around the world." />
            </div>
        </div>
    );
}

export default Trip;
