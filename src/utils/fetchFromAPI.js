import axios from 'axios'


const BASE_URL = 'https://youtube138.p.rapidapi.com'

const options = {
    url: BASE_URL,
    param: {
        maxResults: '50',

    },
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
        'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
}

export const fetchFromAPI = async (url) => {
    return await axios.get(`${BASE_URL}/${url}`, options)
}