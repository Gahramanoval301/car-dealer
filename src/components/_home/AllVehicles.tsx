import React from 'react'
import { IVehicle, IVehicleResponseData } from '../../../api/vehicles'
import SingleVehicle from './SingleVehicle'

const AllVehicles = ({
Results
}:IVehicleResponseData) => {
  return (
    <div className='vehicles-grid'>

    {Results.map((vehicle:IVehicle)=>{
       return <SingleVehicle key={vehicle.MakeId} {...vehicle} />
    })}
    </div>
  )
}

export default AllVehicles