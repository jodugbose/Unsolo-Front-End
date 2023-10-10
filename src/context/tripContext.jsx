import axios from "axios";
import { createContext, useEffect, useState } from "react";

const TripContext = createContext()

const BASE_URL = "http://localhost:8080/api"
const TRIP_URL = `${BASE_URL}/trip/`
const PROFILE_URL = `${BASE_URL}/user/profile?email=`
const BUDDIES_URL = `${TRIP_URL}match`

const TripProvider = ({ children }) => {
    const [trips, setTrips] = useState([])
    const [travellerId, setTravellerId ]= useState(localStorage.getItem("travellerId"))
    const [email, setEmail] = useState("")
    const [buddies, setBuddies] = useState([])
    const[displayName, setDisplayName] = useState(localStorage.getItem("name"))
    const[description, setDescription] = useState("")
    
    
    const FetchTrips = () => {
        axios.get(`${TRIP_URL}${travellerId}`)
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
        axios.get(PROFILE_URL+email)
        .then(response => {
          const data = response.data
          localStorage.setItem("name", `${data?.firstname} ${data?.lastname}`)
          localStorage.setItem("travellerId", data?.id)
          setDescription(data?.description)
          setTravellerId(data?.id)
          setEmail(email)
        })
        .catch(error => {
          console.log(error)
        });
    }

    const FetchBuddies = (formData) => {
        axios.post(BUDDIES_URL, formData)
        .then(res => {
            console.log(res.data)
            setBuddies(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }

    return (
        <TripContext.Provider value={{
            trips,
            FetchTrips,
            travellerId,
            GetUserProfile,
            FetchBuddies,
            buddies,
            displayName,
            description,
        }}>
            {children}
        </TripContext.Provider>
    )
}

export { TripContext, TripProvider }