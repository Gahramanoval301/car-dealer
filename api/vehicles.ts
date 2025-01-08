const BASE_URL =
  process.env.NEXT_PUBLIC_BACKEND_URL

export interface IVehicle {
  MakeId: number;
  MakeName: string;
  VehicleTypeId: number;
  VehicleTypeName: string;
}
export interface IVehicleByYear {
  Make_ID: number;
  Make_Name: string;
  Model_ID: number;
  Model_Name: string;
}
export interface IVehicleResponseData {
    Count: number;
    Message:string;
    SearchCriteria: string;
    Results:IVehicle[]
}
export interface IVehicleResponseDataByYear {
    Count: number;
    Message:string;
    SearchCriteria: string;
    Results:IVehicleByYear[]
}
export const getVehicles = async () => {
  try {
    const response = await fetch(`${BASE_URL}vehicles/GetMakesForVehicleType/car?format=json`, {
      method: "GET",
    });

    if (!response.ok) {
      console.error(`Error: ${response.status} ${response.statusText}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error fetching vehicles:", error);
  }
};
export const getVehiclesByNameAndYear = async (year:number, makeId:number) => {
  try {
    const response = await fetch(`${BASE_URL}vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`, {
      method: "GET",
    });

    if (!response.ok) {
      console.error(`Error: ${response.status} ${response.statusText}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error fetching vehicle:", error);
  }
};
