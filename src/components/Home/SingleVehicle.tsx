import React from 'react'
import { IVehicle } from '../../../api/vehicles'

const SingleVehicle = ({MakeName, VehicleTypeName}:IVehicle) => {
  return (
    <div className='single-vehicle'>
        <h3 className='font-bold'>{MakeName}</h3>
        <p className='underline underline-offset-2'>{VehicleTypeName}</p>
    </div>
  )
}

export default SingleVehicle