import React from 'react'
import { Avatar } from '@mui/material'
import useTrip from '../../../hooks/useTrip'

function Profile() {
  const { displayName, description } = useTrip()

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
      <h3>{ displayName }</h3>
      </div>
      <div className='d-flex justify-content-center text-center'>
        <p>{ description }</p>
      </div>

      <div className='d-flex justify-content-center'>
      <i className="fa-solid fa-map-pin fa-bounce me-2" style={{color: '#ffae00'}}></i>
      {/* style={{marginRight: spacing + 'em'}} */}
        Place, Location
      </div>
    </div>
  )
}

export default Profile
