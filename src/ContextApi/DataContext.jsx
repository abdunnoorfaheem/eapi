import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const DataContext=createContext(null);



export const DataProvider=({children})=>{
     let [data,setData]=useState([]);


    async function viewData(){
        let allProducts=await axios.get("https://dummyjson.com/products");
        setData(allProducts.data.products);
        
    }

    useEffect(()=>{
          viewData();
    },[]);

    return(
        <DataContext.Provider value={{data}}>
         {children}
        </DataContext.Provider>
    )

}