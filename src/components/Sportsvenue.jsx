import "../Components/Sportsvenue.css";
import Little_Elm from "../Images/Little Elm.jpeg";
import Vistara from "../Images/Vistara.png";
import Dfw_badminton from "../Images/Dfwbadminton.jpeg";
import Star from "../Images/star.svg";

const Sportscard =() =>
{
  const venues = [
    { name: "Little_Elm", display: "Little Elm Cricket Academy",area:"Little Elm ,TM",distance:"~3.7 miles", imageUrl: Little_Elm },
    { name: "Vistara", display:"Vistara",area:"Lewisville,TX",distance:"~1.3 miles", imageUrl: Vistara },
    { name: "Dfw_badminton", display : "DFW Badminton Academy", area:"Dallas,TX",distance:"~7.2 miles",imageUrl: Dfw_badminton }
  ];
    return (
      <div className="text">
        Sports venues near you
        <div className="card">
          {venues.map((venue, index) => (
            <div key={index} >
              <img src={venue.imageUrl} alt={venue.name} className={venue.name}/>
              <div>
                <div>
                  <p>{venue.display}</p>
                  <div className="area-distance area distance">
                  <p>{venue.area}</p>
                  <p>{venue.distance}</p>
                </div>
                  <button className="buttonBook display-book">Book</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* <div className="rating">
          <img src={Star}></img>
        </div> */}
      </div>
    );
};
export default Sportscard;
