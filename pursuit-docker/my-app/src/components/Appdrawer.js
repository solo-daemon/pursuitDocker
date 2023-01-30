import React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import DashboardIcon from '@mui/icons-material/Dashboard';
import HomeIcon from '@mui/icons-material/Home';
import Dashboard from '../containers/Dashboard';
import GridViewIcon from '@mui/icons-material/GridView';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import {homeScreen , dashboardScreen} from '../app/features/screenslice'
import { Link } from 'react-router-dom';
import { Button, Icon } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import GradeIcon from '@mui/icons-material/Grade';
const StyledMenu = styled((props) => (
    <Menu
      elevation={0}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
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

const Appdrawer = () => {
  
    const [anchorEl, setAnchorEl] = React.useState(null);

    const open = Boolean(anchorEl);

    const dispatch = useDispatch();

    const handleHomeClick = (event) => {
        dispatch(homeScreen())
        setAnchorEl(event.currentTarget);
    }

    const handleHomeMenuClose = () => {
        setAnchorEl(null)
    }

    const handleDashboardClick = (event) => {
        dispatch(dashboardScreen())
    }

    return (
        <Box sx ={{
            display : 'flex' ,
            alignItems : 'center' ,
            height : window.innerHeight*0.60 ,
        }}>
            
            <Box  sx={{
                
                padding: 2,
                boxShadow : 2 ,

            }} >
                <Box sx={{
                    display: 'grid',
                    gridTemplateRows: 'repeat(3, 1fr)',
                    rowGap: 4,
                    width: '100%',

                }}>
                    <Tooltip title='home'>
                    <Link to = '/home' >
                    <IconButton>
                    <HomeIcon id='h' sx={{
                        borderRadius: '50%',
                        width: '100%',
                        padding: '5%',
                    }}
                        onClick={handleHomeClick}
                    />
                    </IconButton>
                    </Link>
                    </Tooltip>
                    <Link to = 'dashboard'>
                    <Tooltip title = {'dashboard'}>
                    <IconButton>
                    <GridViewIcon id='d' sx={{
                        borderRadius: '50%',
                        width: '100%',
                        padding: '5%',
                    }}
                        onClick={handleDashboardClick}
                    />
                    </IconButton>
                    </Tooltip>
                    </Link>
                </Box>
            </Box>
            <StyledMenu
                id="demo-customized-menu"
                MenuListProps={{
                  'aria-labelledby': 'home-menu',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleHomeMenuClose}
            >
                <Link to = 'home/grader' style={{
                    textDecoration : 'none' ,
                    color : 'black' ,
                }} >
                <MenuItem onClick={handleHomeMenuClose} disableRipple>
                    <GradeIcon/>
                    Grader
                </MenuItem>
                </Link>
                <Link to = 'home/scheduler' style={{
                    textDecoration : 'none' ,
                    color : 'black' ,
                }}>
                <MenuItem onClick={handleHomeMenuClose} disableRipple>
                    <CalendarMonthIcon/>
                    Scheduler
                </MenuItem>
                
                </Link>
            </StyledMenu>                    
        </Box>
    )
}

export default Appdrawer