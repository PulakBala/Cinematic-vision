import axios from "axios";

// Base URL for the TMDB API
const BASE_URL = "https://api.themoviedb.org/3";

// Importing TMDB token from environment variables
const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;

// Headers containing authorization token
const headers = {
    Authorization: "bearer " + TMDB_TOKEN
}

// Function to fetch data from the TMDB API
export const fetchDataFromApi = async (url, params) => {
    try {
        // Making a GET request to the specified URL with headers and parameters
        const { data } = await axios.get(BASE_URL + url, {
            headers,
            params
        });

        // Returning the data received from the API
        return data;
    } catch (err) {
        // Handling errors, if any, and logging them
        console.log(err);
        return err; // Returning the error
    }
}
