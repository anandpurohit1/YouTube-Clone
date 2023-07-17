import { useState } from "react";
const DropDown = () => {

   const[options,setOptions] = useState([])
   const[nation,setNation] = useState({name:'', value:''})

  const handleChange = (e) => {
    console.log(e.target.value);
  };

  const handleInput = (e)=>{
        setNation({...nation,
        [e.target.name] : e.target.value
        })
  }
  const handleSubmit = (e)=>{
    e.preventDefault();
    if(nation.name && nation.value){

        setOptions([...options,nation])
        setNation({name:'', value:''})
    }else{
        console.log('Enter valid value')
    }
    
  }

  return (
    <>
      <select onChange={handleChange}>
        <option value="IN">--Select--</option>
        {options.map(op =>  <option value={op.value}>{op.name}</option> ) }
      </select>

      <form onSubmit={handleSubmit}>
        <input type="text" name="name" onChange={handleInput} placeholder="name" value={nation.name}></input>

        <input type="text" name="value" onChange={handleInput} placeholder="value"  value={nation.value}></input>
        <button>Submit</button>
      </form>
    </>
  );
};
export default DropDown;
