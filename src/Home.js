import { useState } from "react";

const Home = () => {

    // let name = 'mario';
    // This is reactive
    const [name, setName] = useState('mario');
    const [age, setAge] = useState(25);
    const handleClick = () => {
        setName('luigi');
        setAge(30);
    }
    return (  
        <div className="home">
            <h2>Homepage</h2>
            <p>{name} is {age} years old</p>
            {/* When click doesnt make the p tag content change because the name variable is not active. By active it means react watches for its changes*/}
            <button onClick={handleClick}>Click me</button>
            
        </div>
    );
}
 
export default Home;