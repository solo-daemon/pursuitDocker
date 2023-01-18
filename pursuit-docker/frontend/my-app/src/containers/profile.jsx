import axios from 'axios';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setProfileData,setUserId } from '../app/features/profileslice';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Switch from '@mui/material/Switch';
import CloseIcon from '@mui/icons-material/Close';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import { pink } from '@mui/material/colors';
const Profile=()=>{
    const token = useSelector((state) => state.token.token)
    const profileState= useSelector((state)=>state.profile)
    const dispatch= useDispatch();
    const getProfileData=()=>{
        const url = 'http://localhost:8000/pursuit_app/user/profile/?token='+token;
        const config = {
            headers: {
                'Authorization': 'Token ' + token,
            }
        }
        axios.get(url,config)
            .then(res => {
                dispatch(setProfileData(res.data))
            })
            .catch(err=>{
                console.log(err)
            })
    }
    console.log(profileState.profileData)
    React.useEffect(()=>{
        getProfileData();
    },[]);
    return (
        <div>
        <Grid container = {2} spacing={1} sx={{
            display : 'flex' ,
            flexDirection : 'column' ,
            alignItems : 'center' ,
        }}>
            <IconButton >
                <AccountCircleIcon sx={{
                    fontSize : '100px'
                }}/>
            </IconButton>
            <Paper variant="outlined"  elevation={8} sx={{
                width : '60%',
                borderRadius : '5px',
                p : '2%',
                display : 'flex' ,
                flexDirection : 'column' ,
                justifyContent : 'center' , 
                alignItems : 'center' ,
            }}>
                <div >
                <Typography variant="h6" gutterBottom>
        Enrollment Number : {profileState.profileData.enrollment_no}
      </Typography>
      
                </div>
                <div>
                <Typography variant="h6" gutterBottom>
        Name : {profileState.profileData.name}
      </Typography>
                </div>
                <div>
                <Typography variant="h6" gutterBottom>
        Year of Study : {profileState.profileData.year}
      </Typography>
                </div>
                <div sx={{
                    display : 'flex' ,
                    alignItems : 'center' ,
                }}>
                <Typography variant="h6" gutterBottom sx={{
                    display : 'inline',
                }}>
        Admin Status :
      </Typography>
      {profileState.profileData.is_staff ? <DoneOutlineIcon color='success'/> : <CloseIcon sx={{ color: pink[500] }}/>}
                </div>
                
            </Paper>
        </Grid>
        </div>
    );
}

export default Profile