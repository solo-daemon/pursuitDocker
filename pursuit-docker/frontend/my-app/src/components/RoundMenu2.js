import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveRound, setRoundData , setActiveRoundType } from '../app/features/roundslice';
import axios from 'axios';
import { setStudentData } from '../app/features/studentslice';
import { Grid } from '@mui/material';
import Divider from '@mui/material/Divider';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import GradeIcon from '@mui/icons-material/Grade';
const RoundMenu = () => {
    const roundData = useSelector((state) => state.round.roundData)
    const roundState = useSelector((state) => state.round)
    const studentState = useSelector((state) => state.student)
    const seasonState = useSelector((state) => state.season)
    const token = useSelector((state) => state.token.token)
    const [anchorEl, setAnchorEl] = React.useState(null);
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
    function handleMenuItemClick(round_id) {
        dispatch(setActiveRound(round_id));
        roundData.map((props)=>{
            if(props.id==round_id){
                dispatch(setActiveRoundType(props.round_type))
            }
        })
        setAnchorEl(null)
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
    const menu_item = roundData.map((props) =>
        <div>
            <Grid Item key={props.id} onClick={() => handleMenuItemClick(props.id)} sx={{
                width: '200px',
                display: "flex",
                alignItems: 'center',
                justifyContent: 'center',
                mx: 1,
                flexWrap: 'nowrap',
                borderColor: 'primary.main',
                borderBottom: borderBottom(props.id),

            }}>
                {props.round_type == 'T' &&
                    <GradeIcon />
                }
                {props.round_type == 'I' &&
                    <CalendarMonthIcon />
                }

                {props.round_name}

            </Grid>

            <Divider orientation="vertical" flexItem />
        </div>
    )
    return (
        <Grid container={2} sx={{
            display: 'flex',
            overflow: 'auto',
            flexWrap: 'nowrap',
            flexDirection: 'row',
            alignItems: 'center',
            my: 2,
            border: 1,
            borderRadius: '5px',
            py: 2,
        }}>
            {menu_item.length != 0 ? menu_item : 'No Rounds Created for this Season'}
        </Grid>
    );
}


export default RoundMenu