import { useState } from "react";

const Filtered = ({items})=>{

    const [filteredItems,setFilteredItems] =  useState(items)
    const handleChange = (e) =>{
        setFilteredItems(items.filter(it => (it.title.indexOf(e.target.value)>-1)))
    }

    return(
        <div>
            <input onChange={handleChange} type="text"></input>
            {filteredItems.map(it => <div>{it.title}</div>)}
        </div>
    )
}
export default Filtered;