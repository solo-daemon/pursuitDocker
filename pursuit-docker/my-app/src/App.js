import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './containers/Home/Home'
import Grader from './containers/Home/Grader'
import Scheduler from './containers/Home/Scheduler'
import Question from './containers/Home/Question'
import LogIn from './containers/Login'
import Dashboard from './containers/Dashboard'
import Season from './containers/Season'
import NotFound from './components/NotFound'
import Profile from './containers/profile'
import Logout from './components/logout';
import Oauth_Jump from './components/oauth_jump'
import Appbar from './components/AppBar';
import Appdrawer from './components/Appdrawer'
import Grid from '@mui/material/Grid';
import { Box } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux'
import { login } from './app/features/userslice';
export default function App() {
  const dispatch = useDispatch()
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated)
  if(!isAuthenticated){
      if(localStorage.getItem('token')!=undefined && localStorage.getItem('token')!=null){
          dispatch(login())
      }
  }
  return (

    <BrowserRouter>
    <Routes>
      <Route path = 'login' element = {<LogIn />}/>
      <Route path='oauth_jump' element={<Oauth_Jump/>}/>
      <Route path= 'logout' element={<Logout/>}/>
      <Route component={<NotFound/>}/>
    </Routes>
    
   { isAuthenticated &&
   <div>
    <Appbar/>
    <Box mt = {2} >
    <Grid container = {2} spacing={1} >
      {/* <Grid item  xs={1} >
        <Appdrawer />
      </Grid> */}
      <Grid item xs={12} >
        <Routes>
            <Route path = 'season' element = {<Season />} />
            <Route path='profile' element={<Profile/>}/>
            <Route path='home' >
              <Route path='' element={<Home/>}/>
              <Route path='grader' element={<Grader/>}/> 
              <Route path='question' element={<Question />}/>
              <Route path='scheduler' element={<Scheduler/>}/>\
            </Route>
            <Route path='dashboard' >
              <Route path = '' element = {<Dashboard/>}/>
              <Route component={<NotFound/>}/>
            </Route>
        </Routes>
      </Grid>
      </Grid>
      </Box>
      </div> }
     
  </BrowserRouter>
  );
};


