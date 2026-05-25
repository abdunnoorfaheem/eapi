import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import Container from '../Container';
import { DataContext } from '../../ContextApi/DataContext';

const Products = () => {
    
    let {data}=useContext(DataContext);

  return (
    <>
    <Container>
        <div className="flex flex-wrap gap-3">
        {
     
        data.map((item)=>(
           <div className="w-[23%] shadow-2xl px-3 py-4 rounded-lg">
            <img src={item.thumbnail} alt="" />
            <h3 className='text-3xl'>{item.title}</h3>
            <p className='text-gray-500 py-3'>{item.description}</p>
            <div className="flex justify-between text-xl">
                <h5>Price: ${item.price}</h5>
                <h5>Discount: {item.discountPercentage}%</h5>
            </div>
            <div className="pt-5">
                <button className='bg-slate-800 text-white py-2 w-full'>Add To Cart</button>
            </div>
           </div>
        ))
     
    }
    </div>
    </Container>
    </>
  )
}

export default Products