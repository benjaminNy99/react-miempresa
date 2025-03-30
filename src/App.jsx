import { useState } from 'react'
import NavBarMiEmrepsa from '@views/navbar'
import { Route, Routes, useLocation } from 'react-router'
import datamenus from './data/menus.json'
import MenusBar from '@views/menusbar'

function App() {

    const location = useLocation();
    const currentPath = location.pathname;

    const RenderPage = ({ path }) => {
        return (
            <>
            </>
        )
    }

    return (
        <>
            <NavBarMiEmrepsa activo={currentPath} />
            <main>
                <section className='justify-content-center container p-0 m-0'>
                    <div className='row'>
                        <div className='col-4'>
                            <MenusBar menus={datamenus.menus} currentPath={currentPath} />
                        </div>
                        <div className='col-8'>
                            {/* Renderizar menus */}
                            <Routes>
                                <Route path='/' element={<RenderPage path='/' />} />
                                <Route path='/Empresa' element={<RenderPage path='/Empresa' />} />
                                <Route path='/RecursosHumanos' element={<RenderPage path='/RecursosHumanos' />} />
                                <Route path='/Inventario' element={<RenderPage path='/Inventario' />} />
                                <Route path='/Ficha' element={<RenderPage path='/Ficha' />} />
                                <Route path='*' element={<RenderPage path='/' />} />
                            </Routes>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default App
