import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { login } from '../app/features/userslice'
import {setToken} from '../app/features/tokenslice'
import { Navigate } from 'react-router-dom'

const Oauth_Jump = () => {

    const token = useSelector((state) => state.token.token);
    const isAuthenticated = useSelector((state) => state.user.isAuthenticated)
    const dispatch = useDispatch();
    let url = window.location.href
    let url_token
    try {
         url_token = url.split('?')[1].split('=')[1];
    }
    catch(err){
        return(
            <Navigate to='/login'/>
        )
    }
    localStorage.setItem('token',url_token)
    dispatch(setToken())
    if(localStorage.getItem('token') != undefined ){
        dispatch(login())
    }
    return(
        <div>
            logged in and accessed token {token}
            {isAuthenticated && <Navigate to='/home'/>}
        </div>
    )
}

export default Oauth_Jump;