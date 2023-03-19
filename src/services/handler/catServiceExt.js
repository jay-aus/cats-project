const axios = require('axios');
const catsApiBaseUrl = 'https://api.thecatapi.com/v1/breeds';

/* External api call to get the cats list; this is the raw data call*/
export const CatServiceHandler = async () => {
    const config = {
        headers: {
            'x-api-key': process.env.CATS_API_KEY ? process.env.CATS_API_KEY : '',
        },
    };

    const GetCatBreeds = async () => {
        const url = process.env.CATS_API_BASE_URL ? `${process.env.CATS_API_BASE_URL}${'/breeds'}` : catsApiBaseUrl;

        try {
            const { data } = await axios.get(url, config);
            return data;
        } catch (err) {
            throw new Error(err.message);
        }
    };

    return GetCatBreeds();
};
