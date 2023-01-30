import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MuiDrawer from '@mui/material/Drawer';
import {Link} from 'react-router-dom'
const Appbar = () => {


    const [anchorEl, setAnchorEl] = React.useState(null)
    const [open, setOpen] = React.useState(false);
    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" elevation={0} onclose={handleClose}>
                <Toolbar>

                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    <Link to= '/season' style = {{ textDecoration : 'none' ,
                                                   color : 'white' ,
                    }}> 
                        Pursuit 
                    </Link> 
                    </Typography>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleMenu}
                        color="inherit"
                    >
                        <AccountCircle />
                    </IconButton>
                    <Menu
                        id="profile"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                            verical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right'
                        }}
                        open={Boolean(anchorEl)}
                        onclose={handleClose}
                    >
                        <Link to='/profile' style={{ textDecoration: 'none' ,
                                                     color : 'black' ,   
                    }}>
                            <MenuItem onClick={handleClose}>Profile</MenuItem>
                        </Link>
                        <Link to='/logout' style={{ textDecoration: 'none' ,
                                        color : 'black' ,
                    }}>
                            <MenuItem onClick={handleClose}>Logout</MenuItem>
                        </Link>
                    </Menu>
                </Toolbar>
            </AppBar>
        </Box>
    )
};

export default Appbar;