import React, { useState } from 'react'
import SelectForm from '../Common/Select'
import { IVehicleResponseData } from '../../../api/vehicles';
import Link from 'next/link';

const Filter = ({ Results }: IVehicleResponseData) => {
  const initialSelectedValues = {
    name: "",
    year: ""
  }
  const [selectedValues, setSelectedValues] = useState(initialSelectedValues);
  const isLinkDisabled = !selectedValues.name  || !selectedValues.year;
  
  return (
    <div className='shadow-sm flex justify-evenly items-center p-5 bg-bluelight rounded-xl '>
      <SelectForm setSelectedValues={setSelectedValues} selectedValues={selectedValues} type="name" results={Results} />
      <SelectForm setSelectedValues={setSelectedValues} selectedValues={selectedValues} type="years" results={Results} />
      <Link href={`/result/${selectedValues.name}/${selectedValues.year}`}  className={`text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center ${
            isLinkDisabled ? "bg-gray-400 cursor-not-allowed" : ""
          }`}
          onClick={(e) => {
            if (isLinkDisabled) {
              e.preventDefault();
            }
          }}>
        Next
      </Link>
    </div>
  )
}

export default Filter