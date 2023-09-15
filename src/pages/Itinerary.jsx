import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getItinerary,
  resetItinerary,
} from "../redux/actions/itinerariesActions";
import CardCity from "../components/CardCity";
const Itinerary = () => {
  const { idItinerary } = useParams();
  const dispatch = useDispatch();
  const itinerary = useSelector((store) => store.Itineraries.itinerary);
  console.log(itinerary);
  useEffect(() => {
    dispatch(getItinerary(idItinerary));
    return () => dispatch(resetItinerary());
  }, []);

  return (
    <div>
      {itinerary.cities ? (
        <div>
          <h2> Itinerary : {itinerary.itinerary} </h2>
          <h2>Cities : </h2>
          {itinerary.cities.map((city) => (
            <CardCity key={city._id} city={city} />
          ))}
        </div>
      ) : (
        <h2> Sin resultados </h2>
      )}
    </div>
  );
};

export default Itinerary;
