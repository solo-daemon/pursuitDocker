import React, { useState } from "react";
import Box from '@mui/material/Box';
import LoginIcon from '@mui/icons-material/Login';
import Button from '@mui/material/Button';
import { Navigate } from "react-router-dom";
import {  useSelector } from "react-redux";
const  LogIn=()=>{
    const loggedIn = useSelector((state)=>state.user.isAuthenticated)
    return (
    
        <Box sx = {{
        display : 'flex' ,
        width : window.innerWidth ,
        height : window.innerHeight ,
        justifyContent : 'center' ,
        alignItems : 'center' ,
    }}>
        {loggedIn && 
            <Navigate to = '/home' />
        }
        <a style ={{
            textDecoration : 'none' ,
        }}  href="https://channeli.in/oauth/authorise/?client_id=h9D6f2EUchMgCbTodhCqnRiu6BqvDdB9Q1bfsnR3&redirect_url=http://localhost:8000/pursuit_app/user/onlogin&state=success">
            <Button 
                variant= 'contained' 
                startIcon = {<LoginIcon/>}
                sx = {{
                    px : '10%' ,
                    height : 70 ,
                    width : '200%',
                }}
                >
                Login with channel i
            </Button>
        </a>
    </Box>

    )
};

export default LogIn;