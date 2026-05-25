import React from 'react';
import { Route, Routes } from 'react-router-dom';
import RootLayout from './components/layouts/RootLayout';
import Home from './components/pages/Home';
import "./App.css"
import Products from './components/pages/Products';

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<RootLayout/>}>
      <Route index element={<Home/>}/>
      <Route path='/products' element={<Products/>}/>

      </Route>
    </Routes>
    </>
  )
}

export default App