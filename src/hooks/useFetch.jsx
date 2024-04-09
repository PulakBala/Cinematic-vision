import { useEffect, useState } from "react";

import { fetchDataFromApi } from "../utlis/api";

const useFetch = (url) => { 
    
    const [data, setData] = useState(null); 
    const [loading, setLoading] = useState(null); 
    const [error, setError] = useState(null); 

    // Declaring an effect using the useEffect hook.
    useEffect(() => { 
        // Setting loading state to indicate that data is being fetched.
        setLoading("loading..."); 
        // Clearing any previous data.
        setData(null); 
        // Clearing any previous error.
        setError(null); 

        // Calling the fetchDataFromApi function with the provided url.
        fetchDataFromApi(url) 
        // Handling the resolved promise (successful API response).
            .then((res) => { 
                // Setting loading state to false, indicating that data fetching is complete.
                setLoading(false); 
                // Setting the data state to the fetched response.
                setData(res); 
            })
            // Handling any errors that occur during the API request.
            .catch((err) => { 
                // Setting loading state to false.
                setLoading(false); 
                // Setting error state to indicate an error occurred.
                setError("Something went wrong!"); 
            });
            // Dependency array ensures that the effect runs whenever the url changes.
    }, [url]); 

    // Returning an object containing the data, loading, and error states to be used by the component.
    return { data, loading, error }; 
};

// Exporting the useFetch hook.
export default useFetch; 
