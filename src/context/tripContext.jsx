import axios from "axios";
import { createContext, useEffect, useState } from "react";

const TripContext = createContext()

const URL = "http://localhost:8080/api/trip/"
const profileUrl = "http://localhost:8080/api/user/profile?email="
const TripProvider = ({ children }) => {
    const [trips, setTrips] = useState([])
    const [travellerId, setTravellerId ]= useState(1)
    const [email, setEmail] = useState("")

    
    const FetchTrips = () => {
        axios.get(`${URL}${travellerId}`)
        .then(res => {
            console.log(res.data)
            setTrips(res.data)
            if(email)
             GetUserProfile(email)

        }).catch(err => {
            console.log(err)
        });
    }
    
    const GetUserProfile = (email) =>{
        axios.get(profileUrl+email)
        .then(response => {
          const data = response.data
          localStorage.setItem("name", `${data.firstName} ${data.lastName}`)
          setEmail(email)
        })
        .catch(error => {
          console.log(error)
        });
    }

    useEffect(() => {
        FetchTrips();
    }, [])


    return (
        <TripContext.Provider value={{
            trips,
            FetchTrips,
            travellerId,
            GetUserProfile
        }}>
            {children}
        </TripContext.Provider>
    )
}

export { TripContext, TripProvider }