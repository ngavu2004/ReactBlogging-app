const Home = () => {

    let name = 'mario';
    const handleClick = () => {
        name = 'luigi';
        console.log(name);
    }
    return (  
        <div className="home">
            <h2>Homepage</h2>
            <p>{name}</p>
            {/* When click doesnt make the p tag content change because the name variable is not active. By active it means react watches for its changes*/}
            <button onClick={handleClick}>Click me</button>
            
        </div>
    );
}
 
export default Home;