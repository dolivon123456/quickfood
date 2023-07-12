import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { CreateContainer, MainContainer } from '.'
import { About, Menu, ForgetPassword  } from '../pages'

const Routing = () => {
    return (
        <>
        <Routes>
            <Route path='/*' element={ <MainContainer />} />
            <Route path='/createItem' element={ <CreateContainer /> } />
            <Route path='/About' element={ <About /> } />
            <Route path='/menu' element={ <Menu /> } />
            <Route path='/Checkout' element={ <Checkout /> } />
            <Route path='/forget-password' element={ <ForgetPassword /> } />
        </Routes>
        </>
    )
}

export default Routing