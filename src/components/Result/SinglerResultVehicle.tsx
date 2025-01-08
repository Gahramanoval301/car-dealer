import React from 'react'
import { IVehicleByYear } from '../../../api/vehicles'

const SinglerResultVehicle = ({Make_Name, Model_Name}:IVehicleByYear) => {
  return (
    <div className='single-vehicle'>
    <h3 className='font-bold'>{Make_Name}</h3>
    <p className='underline underline-offset-2'>{Model_Name}</p>
</div>
  )
}

export default SinglerResultVehicle