import React from 'react'


import { Navigate, Outlet } from 'react-router-dom'

const userAuth = () => {
    const logDets = JSON.parse(sessionStorage.getItem('userDetails'));
    return logDets;
}

const ProtectedRoutes = () => {
    const isAuth = userAuth()


    return isAuth ? <Outlet /> : <Navigate to='/signup' />

}

export default ProtectedRoutes