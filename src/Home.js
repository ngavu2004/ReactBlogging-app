const Home = () => {
    const handleClick = () => {
        console.log('Hello cookies');
    }

    const handleClickAgain = (name,e) => {
        console.log('hello' + name);
    }
    return (  
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={handleClick}>Click me</button>
            {/* // When we need to use function  */}
            {/* // with parameter, we cannot use  */}
            {/* // OnClick={\handleClick('para')} right away bc it will invoke the function immediately when the program run */}
            <button onClick={(e) => {handleClickAgain('Babygirl',e)}}>Click me again</button>
        </div>
    );
}
 
export default Home;