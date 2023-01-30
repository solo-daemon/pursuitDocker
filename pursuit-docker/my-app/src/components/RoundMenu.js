import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import GradeIcon from '@mui/icons-material/Grade';
import ExpandIcon from '@mui/icons-material/Expand';
import { styled, alpha } from '@mui/material/styles';
import Fab from '@mui/material/Fab';
import { setActiveRound, setRoundData,setActiveRoundType } from '../app/features/roundslice';
import axios from 'axios';
import { setStudentData } from '../app/features/studentslice';
const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));

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
    const url = 'http://localhost:8000/pursuit_app/student/' + roundState.activeRound + '/interview_dashboard'
    const config = {
      headers: {
        'Authorization': 'Token ' + token,
      }
    }
    if (roundState.activeRound != -1) {
      axios.get(url, config)
        .then(res => {
          dispatch(setStudentData(res.data))
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

      }
    }
    );
    setAnchorEl(null)
  }
  React.useEffect(() => {
    getStudentData();
  }, [roundState.activeRound])

  React.useEffect(() => {
    getRoundData()
  }, [seasonState.activeSeason])
  const menu_item = roundData.map((props) =>
    <div key={props.id} onClick={() => handleMenuItemClick(props.id)}>
      <MenuItem >
        {props.round_type == 'T' &&
          <GradeIcon />
        }
        {props.round_type == 'I' &&
          <CalendarMonthIcon />
        }

        {props.round_name}
      </MenuItem>
    </div>
  )

  return (
    <div>
      <Fab color="primary" aria-label="fixed" sx={{ position: 'fixed', bottom: '10%', right: '10%' }}
        onClick={handleClick}
      >
        <ExpandIcon />
      </Fab>
      <StyledMenu
        id="round-menu"
        MenuListProps={{
          'aria-labelledby': 'round-menu',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >

        {menu_item}
      </StyledMenu>
    </div>
  )
}

export default RoundMenu