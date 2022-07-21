import { useState } from "react";

export const AddCategory = ({onNewCategory}) => {
    const[value, setvalue] = useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        if(value.trim().length <=1 ) return;
        //setcategories(category =>[...category, value]);
        
        onNewCategory(value.trim());
        setvalue(''); 
    }

    const onInputChange = (event) =>{
       // console.log(event.target.value);
        setvalue(event.target.value);
    }

  return (
    <form onSubmit={onSubmit}>
        <input 
        type="text"
        placeholder="buscar gifs"
        value= {value}
        onChange={onInputChange}
        /> 
    </form>
  )
}
