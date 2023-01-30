import React from 'react'
import { useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import {logout} from '../app/features/userslice'
const Logout = () => {

    const dispatch = useDispatch();
    dispatch(logout())
    return (
        <Navigate to='/login'/>
    )
}

export default Logout;