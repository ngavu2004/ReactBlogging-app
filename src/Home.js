import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);

    useEffect(() => {
        // npx json-server --watch data/db.json --port 8000
        fetch("http://localhost:8000/blogs")
            .then(res => {
                if (!res.ok) {
                    // Throw the error and it will be caught in the code below and printed the message out
                    throw Error('could not fetch the data for that resource');
                }
                return res.json();
            })
            .then((data) => {
                console.log(data);
                setBlogs(data);
                setIsPending(false)})
            .catch(err => {
                console.log(err.message);
            });
    }, [])

    return (  
        <div className="home">
            {/* If the below condition is false, the part after && wont work */}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All blogs"/>}
            
        </div>
    );
}
 
export default Home;