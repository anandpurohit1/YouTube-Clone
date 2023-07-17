import { useState } from "react"

function Demo(){

    const[data,setData] = useState(true)
  

    return(
        <>
       
        {
            data? <h1>Hello Anand</h1> : null
        }
        
        <button onClick={()=> setData(!data)}>Toggle</button>
       
        </>
    )
}
export default Demo