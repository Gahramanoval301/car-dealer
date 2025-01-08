"use client"

import { years } from "@/data/selectedYears";
import { IVehicle } from "../../../api/vehicles";
import { ChangeEvent } from "react";
import { IoIosArrowDropdown } from "react-icons/io";
interface ISelectedValues {
    name: string;
    year: string;
}
interface ISelectForm {
    setSelectedValues: (values: ISelectedValues) => void;
    selectedValues: ISelectedValues;
    type: "name" | "years";
    results: IVehicle[] | null;
}
export default function SelectForm({ setSelectedValues, selectedValues, type, results }: ISelectForm) {

    const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
        if (type === "name") {
            setSelectedValues({ ...selectedValues, name: event.target.value });
        }
        if (type === "years") {
            setSelectedValues({ ...selectedValues, year: event.target.value });
        }
    };

    return (
        <form className="max-w-sm mx-auto">

            {type == "name" ?
                <div className="relative">
                    <select
                        id="make_name_select"
                        value={selectedValues.name}
                        onChange={handleChange}
                        className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                    >

                        {results?.map((result: IVehicle) => (
                            <option key={result.MakeId} value={result.MakeId} className="px-1">
                                {result.MakeName}
                            </option>
                        ))
                        }

                    </select>
                    <span className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none">
                        <IoIosArrowDropdown />
                    </span>
                </div>
                :
                <div className="relative">
                    <select
                        id="year_select"
                        value={selectedValues.year}
                        onChange={handleChange}
                        className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                    >
                        {years?.map((year: number) => (
                            <option key={year} value={year} className="px-1">
                                {year}
                            </option>
                        ))
                        }
                    </select>
                    <span className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none">
                        <IoIosArrowDropdown />
                    </span>
                </div>
            }
        </form>
    );
}
