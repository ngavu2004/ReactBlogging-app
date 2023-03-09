import {useState, useEffect} from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // npx json-server --watch data/db.json --port 8000
        fetch(url)
            .then(res => {
                if (!res.ok) {
                    // Throw the error and it will be caught in the code below and printed the message out
                    throw Error('could not fetch the data for that resource');
                }
                return res.json();
            })
            .then((data) => {
                console.log(data);
                setData(data);
                setIsPending(false);
                setError(null);
            })
            .catch(err => {
                setError(err.message);
                setIsPending(false);
                
            });
    }, [url]);

    return {data,isPending,error}
}

export default useFetch;