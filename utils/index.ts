import { get } from "http";

export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "a88be48743msh54110618d3bad3fp142b27jsn757ddbdeab8a",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };
  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla",
    { headers: headers }
  );
  const result = await response.json();
  return result;
}

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePrice = 50;
  const mileage = 0.1;
  const age = 0.05;
  const mileageRate = city_mpg * mileage;
  const ageRate = (new Date().getFullYear() - year) * age;

  const rent = basePrice + mileageRate + ageRate;

  return rent.toFixed(1);
};
