import { Container } from '@mui/system';
import React from 'react'
import { useSelector } from 'react-redux';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { Icon, TextareaAutosize, TextField, Tooltip } from '@mui/material';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Add from '@mui/icons-material/Add';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Box } from "@mui/system";
import CloseIcon from '@mui/icons-material/Close';
import Modal from '@mui/material/Modal';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

function StudentData(){


    return(
        <Box sx={{
            width: '100%',
            my: 2,
        }}>
            <Box>
                <Typography variant='h5'>Student Information : </Typography>
            </Box>
            
        </Box>
    );
}

function StudentRoundData(){
    return(
    <Box sx={{
        width: '100%',
        my: 2,
    }}>
        <Box>
            <Typography variant='h5'>Developer Test : </Typography>
         </Box>
        <Paper sx={{
            width: '100%',
            my:2,
            py : 2,
            px : 1,
            border: '2px solid black'
        }}>
            <Box>
                <Typography variant='h5'>props.section_name :</Typography>
            </Box>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                my : 3,
            }}>
                <Box sx={{display:'flex'}}>
                    <TextareaAutosize sx={{width: '100%',size:40}} style={{fontSize: 20, width:'400px'}} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quaerat, minima doloribus maxime qui odit sequi ratione officiis illo aut iste? Consequuntur excepturi a qui, autem vitae iure laboriosam? Nulla?</TextareaAutosize>
                </Box>
                <Box sx={{display:'flex'}}>
                    <TextField variant='standard' sx={{width:'50px'}} value={5}></TextField>
                    <Typography>\</Typography>
                    <TextField disabled variant='standard' value={10} sx={{width:'50px',display:'flex'}}/>
                </Box>
            </Box>
        </Paper>
    </Box>
    );
}

const StudentInfoModal = (props) => {
    const token = useSelector((state) => state.token.token);
    const config = {
        headers : {
            'Authorization' : 'Token ' + token ,
        }
    }
    return(
        <Modal open={props.open} onClose={()=>{props.onClose()}}> 
        <Container fixed>
            
            <Paper sx={{
                border: '2px solid black',
                py: 3,
                px: 4,
                
            }}
            elevation={3}>
                <Box sx={{
                    width: '100%',
                    display: 'flex',
                    justifyContent:'space-between'
                }}>
                    <Box sx={{width:'50%'}}>
                        <Typography variant='h5'>21112024 :</Typography>
                        <Typography variant='body2'>Amrit Prakash</Typography>
                    </Box>
                    <Tooltip title="Close">
                        <IconButton>
                            <CloseIcon/>
                        </IconButton>
                    </Tooltip>
                </Box>
                <Divider/>
                <StudentData/>
                <StudentRoundData/>
            </Paper>
        </Container>
        </Modal>
    );

};
export default StudentInfoModal ;