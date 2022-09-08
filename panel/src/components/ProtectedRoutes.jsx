import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const userAuth = () => {
    // const logDets = JSON.parse(sessionStorage.getItem('userDetails'));
    const logDets = JSON.parse(localStorage.user);
    return logDets;
}

const ProtectedRoutes = () => {
    const isAuth = userAuth()
    return isAuth ? <Outlet /> : <Navigate to='/login' />

}

export default ProtectedRoutes