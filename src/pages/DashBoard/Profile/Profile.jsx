import React, { useEffect, useState } from 'react'
import { Avatar } from '@mui/material'
import useTrip from '../../../hooks/useTrip'

function Profile() {
  const { displayName, description } = useTrip()
  const [name, setName] = useState("");
  const [loc, setLoc] = useState("");
  const getLocation = async () => {
    const res = await fetch("http://localhost:8080/api/location/city-state");
    const data = await res.json();
    setLoc(data.city + ", " + data.state)
  }
  useEffect(() => {
    setName(localStorage.getItem("name"));
    getLocation();
  },[])

  return (
    <div>
      <div className='d-flex justify-content-center'>
        <Avatar
          alt="Remy Sharp"
          src="https://lh3.googleusercontent.com/drive-viewer/AK7aPaANOO0M3rtyLlEk-Fww6wsm8jGh2UaJxsCvGFdB0OmUdUg8opKXKpL42JoTgK2_EFk6lndwacH4DH28COEateNvD4_l2Q=s2560"
          sx={{ width: 80, height: 80 }}
        />
      </div >
      <div className='d-flex justify-content-center mt-2'>
      <h3>{ name }</h3>
      </div>
      <div className='d-flex justify-content-center text-center'>
        <p>{ description }</p>
      </div>

      <div className='d-flex justify-content-center'>
      <i className="fa-solid fa-map-pin fa-bounce me-2" style={{color: '#ffae00'}}></i>
      {/* style={{marginRight: spacing + 'em'}} */}
        {loc}.
      </div>
    </div>
  )
}

export default Profile
