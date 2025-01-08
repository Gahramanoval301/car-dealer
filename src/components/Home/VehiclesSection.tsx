"use client"
import React, { useEffect, useState } from 'react'
import Filter from './Filter'
import { getVehicles, IVehicleResponseData } from '../../../api/vehicles';
import AllVehicles from './AllVehicles';

const VehiclesSection = () => {
    const [vehiclesData, setVehiclesData] = useState<IVehicleResponseData | null>(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        try{

            const getVehiclesData = async () => {
                const data = await getVehicles();
                setVehiclesData(data);
                setLoading(false)
            }
            getVehiclesData();
        }catch{
            setLoading(false)
        }
    }, [])

    if(loading) return <>Loading...</>

    return (
        <>
        <Filter {...vehiclesData}/>
      <p className='mt-4'>Count: {vehiclesData?.Count}</p>  
        {vehiclesData ? 
        <AllVehicles {...vehiclesData} /> : <p>There are no any vehicles.</p>
        }
        </>
    )
}

export default VehiclesSection