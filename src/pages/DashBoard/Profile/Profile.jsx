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
          src="https://media.istockphoto.com/id/1309800132/photo/dubai-skyline-view-from-the-marasi-marina-in-city-business-bay-downtown-area-in-the-uae.jpg?s=2048x2048&w=is&k=20&c=V4BcklcU3AYCyeJcNkKOMzF1Qo-DK-AHlgmgOJ02VQE="
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
