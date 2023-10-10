import { useContext } from "react";
import { TripContext } from "../context/tripContext";

const useTrip = () => useContext(TripContext);

export default useTrip;
