"use server"

// const base_url = process.env.BACKEND_BASE_URL

type ChatResponseType = {
    answer: string
}


export const getChatResponse = async ({value}:{value: string}): Promise<ChatResponseType> => {
    const options = {
        method: "GET",
        headers: {
            accept: "application/json",
        },
    };

    const response = await fetch(
        `https://eegai-production.up.railway.app/api/chat?question=${value}`,
        options
    )
        .then((response) => response.json())
        .catch((err) => {
            return { error: err }
        });

    return response;
}