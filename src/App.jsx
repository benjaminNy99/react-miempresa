import { useState } from 'react'
import NavBarMiEmrepsa from '@views/navbar'
import { BrowserRouter, Route, Router, Routes } from 'react-router'
import datamenus from './data/menus.json'
import MenusBar from '@views/menusbar'

function App() {

    const RenderPage = ({ path }) => {
        return (
            <>
                <NavBarMiEmrepsa activo={path} />
                <main>
                    <section className='justify-content-center container p-0 m-0'>
                        <div className='row'>
                            <div className='col-4'>
                                <MenusBar menus={datamenus.menus} />
                            </div>
                            <div className='col-8'></div>
                        </div>
                    </section>
                </main>
            </>
        )
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<RenderPage path='/' />} />
                <Route path='/Empresa' element={<RenderPage path='/Empresa' />} />
                <Route path='/RecursosHumanos' element={<RenderPage path='/RecursosHumanos' />} />
                <Route path='/Inventario' element={<RenderPage path='/Inventario' />} />
                <Route path='/Ficha' element={<RenderPage path='/Ficha' />} />
                <Route path='*' element={<RenderPage path='/' />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
