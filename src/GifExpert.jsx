import { useState } from "react";
import { AddCategory, GifGrid } from "./components"; //apunta al archivo de barril. index.js

export const GifExpert = () => {
  const [categories, setcategories] = useState(["peliculas"]);
  
  const onNewCategory = (value) => {
    setcategories([value, ...categories]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory onNewCategory={onNewCategory} />

      {categories.map(category=>
        (<GifGrid 
        key={category}
        category={category}/>
      ))

      }
    </>
  );
};
