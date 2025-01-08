"use client"
import { useEffect, useState } from "react"
import { getVehiclesByNameAndYear, IVehicleResponseDataByYear } from "../../../../../api/vehicles"
import SinglerResultVehicle from "@/components/_result/SinglerResultVehicle"

export async function generateStaticData(makeId: number, year: number) {
  const vehicles = await getVehiclesByNameAndYear(year, makeId)  
  return vehicles
}

export default function Page({ params }: { params: Promise<{ makeId: number, yearId: number }> }) {
  const [vehicles, setVehicles] = useState<IVehicleResponseDataByYear>()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        setLoading(true)
        const parameters = await params
        const data = await getVehiclesByNameAndYear(parameters.makeId, parameters.yearId )
        setVehicles(data)
      } catch {
        setError("Failed to fetch vehicles.")
      } finally {
        setLoading(false)
      }
    }

    fetchVehicles()
  }, [params])

  if (loading) return <div>Loading...</div>
  if (error) return <div>{error}</div>

  return (
    <div className="px-4 my-4">
      <h2 className="text-center  text-lg">Vehicles List</h2>
      <div className="vehicles-grid">
      {vehicles.Count === 0? (
        <p>No vehicles found.</p>
      ) : (
        <ul>
          {vehicles.Results.map((vehicle) => (
          <SinglerResultVehicle key={vehicle.Make_ID} {...vehicle}/>
          ))}
        </ul>
      )}
      </div>
    </div>
  )
}