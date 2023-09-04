import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getItineraries } from "../redux/actions/itinerariesActions";
import CardItinerary from "../components/CardItinerary";
const Itineraries = () => {
  const dispatch = useDispatch();
  const itinerariesStore = useSelector((store) => store.itineraries.itineraries);

  useEffect(() => {
    dispatch(getItineraries());
  }, []);

  return (
    <div className="d-flex justify-content-center align-items-center flex-wrap p-1 gap-5">
      {itinerariesStore.map((itinerary) => (
        <CardItinerary key={itinerary.itinerary} itinerary={itinerary} />
      ))}
    </div>
  );
};

export default Itineraries;
