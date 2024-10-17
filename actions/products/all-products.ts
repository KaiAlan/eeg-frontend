"use server"



// const base_url = process.env.BACKEND_BASE_URL


export const getAllProducts = async(): Promise<any> => {
    const options = {
        method: "GET",
        headers: {
            accept: "application/json",
        },
    };

    const response = fetch(
        `https://eeg-backend-hfehdmd4hxfagsgu.canadacentral-01.azurewebsites.net/api/users/product/`,
        //'http://localhost:8000/api/users/product/',
        
        options
    )
        .then((response) => response.json())
        .catch((err) => {
            return { error: err }
        });

    return response;
}