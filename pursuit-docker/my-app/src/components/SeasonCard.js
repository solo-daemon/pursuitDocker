import React from 'react' ;
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea } from '@mui/material';
import {setActiveSeason} from '../app/features/seasonslice'
import { useDispatch ,useSelector} from 'react-redux';
import axios from 'axios'
import {setRoundData} from '../app/features/roundslice'
import {Navigate} from 'react-router-dom'

const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );

const SeasonCard = (props) => {
    const [onDashboard,setOnDashboard] = React.useState(false)
    const dispatch = useDispatch()
    const activeSeason = useSelector((state)=>state.season.activeSeason)
    const token = useSelector((state) => state.token.token);
    if(onDashboard==true){
    const url_round = 'http://localhost:8000/pursuit_app/season/'+ activeSeason +'/season_info/' 
    const config = {
        headers : {
            'Authorization' : 'Token ' + token ,
        }
    }
    axios.get(url_round,config)
            .then(res=>{
                dispatch(setRoundData(res.data))
                
            })
            .catch(err=>{
                console.log(err)
            })
}
    const handleContentClick = (event)=>{
        setOnDashboard(true)
    }
    

    return (
        <Card  sx={{
            p : 2 ,
            width : 250 ,
            m : 1 ,
        }}  onClick={()=>dispatch(setActiveSeason(props.id))}>
            <CardActionArea  id={props.id} onClick={handleContentClick}>
            <CardContent  >
            {onDashboard && 
                <Navigate to='/dashboard'></Navigate>
            }
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                {props.season_type=='d' &&
                    <span>Designer</span>
                }
                {props.season_type=='D' &&
                    <span>Developer</span>
                }
                {bull}{props.season_year}
            </Typography>
                <Typography variant="h5" component="div">{props.season_name}</Typography>
            </CardContent>
            </CardActionArea>
            <CardActions sx={{
                px : 0 ,
            }}>
                <Button size="small" onClick={props.onClick}> Edit </Button>
            </CardActions>
        </Card>
    )
        }

export default SeasonCard ;