"use server"

type Product = {
    id: number;
    name: string;
    description: string;
    price: string; // Consider using number if you want to handle it as a numeric value
    seller: number;
    created_at: string; // You might want to use Date if you parse it
    category: string;
    quantity: number;
    seller_name: string;
};

type SearchResponse = {
    results: Product[];
    recommendations: Product[]
}
// const base_url = process.env.BACKEND_BASE_URL


export const getSearchResultsByCategory = async({value}:{value: string}): Promise<SearchResponse> => {
    const options = {
        method: "GET",
        headers: {
            accept: "application/json",
        },
    };

    const response = fetch(
        `https://eeg-backend-hfehdmd4hxfagsgu.canadacentral-01.azurewebsites.net/api/users/category/?q=${value}`,
        
        options
    )
        .then((response) => response.json())
        .catch((err) => {
            return { error: err }
        });

    return response;
}