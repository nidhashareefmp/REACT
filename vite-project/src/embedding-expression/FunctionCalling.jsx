import React from 'react'

const FunctionCalling = () => {
    function Greeting(name) {
        return `hello, ${name}`;
    }

    function GetGreeting() {
        return <h2>{Greeting("Nidha")} </h2>;
    }
    return (
        <div>
            <GetGreeting />
        </div>
    )
}

export default FunctionCalling
