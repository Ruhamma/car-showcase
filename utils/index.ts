import { CarProps, FilterProps } from "@/types";
import { get } from "http";

export async function fetchCars(filters: FilterProps) {
  const { manufacturer, year, fuel, limit, model } = filters;

  const headers = {
    "X-RapidAPI-Key": "a88be48743msh54110618d3bad3fp142b27jsn757ddbdeab8a",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };
  const response = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`,
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

export const carImageUrl = (car: CarProps, angle?: string) => {
  const url = new URL("https://cdn.imagin.studio/getimage");
  const { make, model, year } = car;

  url.searchParams.append("customer", "hrjavascript-mastery");
  url.searchParams.append("make", make);
  url.searchParams.append("modelFamily", model.split(" ")[0]);
  url.searchParams.append("zoomType", "fullscreen");
  url.searchParams.append("modelYear", `${year}`);
  // url.searchParams.append('zoomLevel', zoomLevel);
  url.searchParams.append("angle", `${angle}`);

  return `${url}`;
};

export const updateParams = (type: string, value: string) => {
  const searchParams = new URLSearchParams(window.location.search);

  searchParams.set(type, value);

  const newPathname = `${window.location.pathname}?${searchParams.toString()}`;
  return newPathname;
};
