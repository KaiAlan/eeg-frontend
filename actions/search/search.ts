"use server"

import { Product } from "@/data/dummy/types";

// const base_url = process.env.BACKEND_BASE_URL


export const getSearch = async({value}:{value: string}): Promise<Product[]> => {
    const options = {
        method: "GET",
        headers: {
            accept: "application/json",
        },
    };

    const response = fetch(
        `https://eeg-backend-hfehdmd4hxfagsgu.canadacentral-01.azurewebsites.net/api/users/product/search?q=${value}`,
        //`http://localhost:8000/api/users/product/search?q=${value}`,
        options
    )
        .then((response) => response.json())
        .catch((err) => {
            return { error: err }
        });

    return response;
}