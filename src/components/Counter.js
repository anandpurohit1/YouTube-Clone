import { useState } from "react";
function Counter(){
 console.log('render Counter')
    const [number,setNumber]  = useState(0)

    function handleClick(e){
        e.stopPropagation();
        // setNumber(number+1);
        // but more effective way
        setNumber(number=>number+1)
        console.log(number)
    }

    return(

    <>
        <h1>{number}</h1>
        <button onClick={handleClick}>Add</button>
    </>
    )

}

export default Counter;