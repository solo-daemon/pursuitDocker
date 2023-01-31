import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveRound, setRoundData , setActiveRoundType } from '../app/features/roundslice';
import axios from 'axios';
import { setStudentData } from '../app/features/studentslice';
import { Grid } from '@mui/material';
import Divider from '@mui/material/Divider';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import GradeIcon from '@mui/icons-material/Grade';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import {Box} from '@mui/material';

const RoundMenu = () => {
    const roundData = useSelector((state) => state.round.roundData)
    const roundState = useSelector((state) => state.round)
    const studentState = useSelector((state) => state.student)
    const seasonState = useSelector((state) => state.season)
    const token = useSelector((state) => state.token.token)
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [tabRound,setTabRound]=React.useState(0)
    const open = Boolean(anchorEl);
    const dispatch = useDispatch()
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const getRoundData = () => {
        const url_round = 'http://localhost:8000/pursuit_app/season/' + seasonState.activeSeason + '/season_info/'
        const config = {
            headers: {
                'Authorization': 'Token ' + token,
            }
        }
        axios.get(url_round, config)
            .then(res => {
                dispatch(setRoundData(res.data))

            })
            .catch(err => {
                console.log(err)
            })
    }
    const handleClose = () => {
        setAnchorEl(null);
    };
    function getStudentData() {
        let url = 'http://localhost:8000/pursuit_app/student/' + roundState.activeRound 
        if(roundState.activeRoundType=='T'){
            url+='/test_dashboard';
        }else if (roundState.activeRoundType=='I'){
            url+='/interview_dashboard';
        }
        const config = {
            headers: {
                'Authorization': 'Token ' + token,
            }
        }
        if (roundState.activeRound != -1) {
            axios.get(url, config)
                .then(res => {
                    dispatch(setStudentData(res.data))
                    console.log(res.data)
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }
    function getQuestionData(){

    }
    function handleMenuItemClick(round_id) {
        dispatch(setActiveRound(round_id));
        roundData.map((props)=>{
            if(props.id==round_id){
                dispatch(setActiveRoundType(props.round_type))
                
            }
        })
    
    

        setAnchorEl(null)
    }
    function handleTabChange(even,newValue){
        setTabRound(newValue)
    }
    React.useEffect(() => {
        getStudentData();
    }, [roundState.activeRound])

    React.useEffect(() => {
        getRoundData()
    }, [seasonState.activeSeason])

    const borderBottom = (id) => {
        if (id == roundState.activeRound) {
            return 1;
        }
        return 0;
    }
    // const menu_item = roundData.map((props) =>
    //     <div>
    //         <Grid Item key={props.id} onClick={() => handleMenuItemClick(props.id)} sx={{
    //             width: '200px',
    //             display: "flex",
    //             alignItems: 'center',
    //             justifyContent: 'center',
    //             mx: 1,
    //             flexWrap: 'nowrap',
    //             borderColor: 'primary.main',
    //             borderBottom: borderBottom(props.id),

    //         }}>
    //             {props.round_type == 'T' &&
    //                 <GradeIcon />
    //             }
    //             {props.round_type == 'I' &&
    //                 <CalendarMonthIcon />
    //             }

    //             {props.round_name}

    //         </Grid>

    //         <Divider orientation="vertical" flexItem />
    //     </div>
    // )

    const menu_item = roundData.map((props)=>
        <Tab label={props.round_name} key={props.id} value={props.id} onClick={()=>{handleMenuItemClick(props.id)}}>Hello</Tab>
    )
    console.log(menu_item);
    return (
        <Box sx={{ width: '100%' ,my:1}}>
        <Tabs
          value={tabRound}
          textColor="secondary"
          onChange={handleTabChange}
          indicatorColor="secondary"
          aria-label="secondary tabs example"
          variant="scrollable"
          scrollButtons="auto"
        >
            {menu_item.length != 0 ? menu_item : <Tab label='No Rounds Created for this Season' />}
        </Tabs>
      </Box>
    );
}


export default RoundMenu