import { useState } from 'react'
import NavBarMiEmrepsa from '@views/navbar'
import { BrowserRouter, Route, Router, Routes } from 'react-router'
import Menus from '@views/menus'
import datamenus from './data/menus.json'

function App() {

    const RenderPage = ({ path }) => {
        return (
            <>
                <NavBarMiEmrepsa activo={path} />
                <Menus />
            </>
        )
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<RenderPage path='/' />}/>
                <Route path='/Empresa' element={<RenderPage path='/Empresa' />} />
                <Route path='/RecursosHumanos' element={<RenderPage path='/RecursosHumanos' />} />
                <Route path='/Inventario' element={<RenderPage path='/Inventario' />} />
                <Route path='/Ficha' element={<RenderPage path='/Ficha' />} />
                <Route path='*' element={<RenderPage path='/' />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
