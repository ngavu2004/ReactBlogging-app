import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
    const {data: blogs,isPending,error} = useFetch("http://localhost:8000/blogs");
    

    return (  
        <div className="home">
            {/* If the below condition is false, the part after && wont work */}
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All blogs"/>}
            
        </div>
    );
}
 
export default Home;