import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CloseIcon from '@mui/icons-material/Close';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { pink } from '@mui/material/colors';
import Tooltip from '@mui/material/Tooltip';
import Modal from '@mui/material/Modal';
import axios from 'axios';
import { useSelector } from 'react-redux';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: window.innerWidth*0.3,
    height: '50px',
    bgcolor: 'background.paper',
    borderRadius: '10px',
    boxShadow: 24,
    p: 4,
};

const UpadateStudentStatus=(props)=>{
    const token = useSelector((state) => state.token.token)

    const changeStatus=(round_id)=>{
        const url = 'http://localhost:8000/pursuit_app/student/' ;
        const config = {
            headers: {
                'Authorization': 'Token ' + token,
            }
        }
        const data={
            "status" : round_id,
        }
        props.selectedStudentData.map((id)=>{
            const url1=url+id;
            axios.patch(url1,data,config)
        })
        
        axios.patch()
            .then(res=>{
                console.log(res);
            }).catch(err=>{
                console.log(err);
            })
    }
    return (
        <Modal open={props.open}
        onClose={props.handleModalClose}>
           <Box sx={style}></Box>
        </Modal>
    )
}



const DashboardSearch = (props) => {
    
    const [searchText, setSearchText] = React.useState('');
    const [openModal,setOpenModal]=React.useState(false);
    return (
        <Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', border:1,borderRadius:'10px' }}
        >
            <InputBase
                value={searchText}
                onChange={(e)=>setSearchText(e.target.value)}
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search"
                inputProps={{ 'aria-label': 'search throught fields' }}
            />

            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
            </IconButton>
            
        </Paper>
    )
}


const CheckboxAction = (props) => {
    const open = props.open
    const token = useSelector((state)=>state.token.token)
    const [openModal,setOpenModal]=React.useState(false);
    const rounds = useSelector((state)=>state.round.roundData);
    const [selectedStudent,setSelectedStudent]=React.useState(props.selectedStudent)
    console.log(rounds);
    const handleModalClose=()=>{
        setOpenModal(false);
    }
    const handleDisqualification=()=>{
        const url = 'http://localhost:8000/pursuit_app/student/';
        const config = {
            headers: {
                'Authorization': 'Token ' + token,
            }
        }
        const data = {
            selection_status : 'D' ,
        }
        console.log('ehoo')
        for (let x in selectedStudent){
            console.log(x);
            url += x;
            axios.patch(url,data,config)
            .then((res)=>{
                console.log(res);
            })
            .err((err)=>{
                console.log(err);
            })
        }
    }
    return (
        <div>
            {open ? 
            <div>
                <Tooltip title="Disqualify">
                <IconButton
                label="disqualify"
                onClick={handleDisqualification}
                >
                    <CloseIcon sx={{ color: pink[500] }}/>
                </IconButton>
                </Tooltip>
                <Tooltip title="Send to Next Round">
                <IconButton onClick={()=>{setOpenModal(true)}}>
                    <ArrowForwardIcon color="success"/>
                </IconButton>
                </Tooltip>
             </div>
            : ''}
            {openModal && <UpadateStudentStatus selectedStudentData={selectedStudent} open={openModal} handleModalClose={handleModalClose}/>}
        </div>
    );
}

const RoundFilter=(props)=>{
    const round = useSelector((state)=>state.round)
    return (
        <div>
            {(round.roundData.round_type=='I') ? 'hello':'hello world'}
        </div>
    )
}

const DashboardTaskBar = (props) => {

    return (
        <div style={{
            width: '100%',
        }}>

            <Grid container={2} sx={{
                width: '100%',
                justifyContent: 'space-between',
                alignItems: 'center',
                px: 5,
                mb: 1,
            }}>
                <Grid Item xs={4} >
                    <DashboardSearch />
                </Grid>
                <Grid Item xs={4} style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                }}>
                    <CheckboxAction open={props.openCheckboxActions} selectedStudent={props.selectedStudent}/>
                </Grid>
            </Grid>
        </div>
    );
}

export default DashboardTaskBar;