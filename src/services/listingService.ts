import { iListings, iListingsResponse } from "../models/iListings";
import { get } from "./serviceBase";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const getListings = async (): Promise<iListings[]> => {
  const response = await get<iListingsResponse>(`${BASE_URL}/listings`);
  return response.data;
};

export const getListingById = async (id: string): Promise<iListings | null> => {
    const response = await get<iListingsResponse>(`${BASE_URL}/listings`);
    return response.data.find(listing => listing.id === id) || null;
  };

export const getListingsByCategory = async (category: string): Promise<iListings[]> => {
  const response = await get<iListingsResponse>(
    `${BASE_URL}/listings?category=${category}`
  );
  return response.data;
};