import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Men from './components/Men'
import Women from './components/Women'
import Kid from './components/Kid'
import Contact from './components/Contact'
import Product from './components/Product'




const Routers = () => {
    return (
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='men' element={<Men />}>
                {/* <Route path=':id' element={<Product />} ></Route> */}
            </Route>
            <Route path='women' element={<Women />}>
                {/* <Route path=':id' element={<Product />} ></Route> */}
            </Route>
            <Route path='kid' element={<Kid />} >
                {/* <Route path=':id' element={<Product />} ></Route> */}
            </Route>
            <Route path='men/product/:id' element={<Product />} />
            <Route path='women/product/:id' element={<Product />} />
            <Route path='kid/product/:id' element={<Product />} />
            <Route path='*' element={<Contact />} />
        </Routes>
    )

}
export default Routers