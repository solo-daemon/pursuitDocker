import { stepButtonClasses } from '@mui/material';
import axios from 'axios';
import React from 'react';
import { useSelector } from 'react-redux';
import InterviewRoundTable from '../components/InterviewRoundTable2';
import DashboardTaskBar from '../components/DashboardTaskBar';
import RoundMenu from '../components/RoundMenu2';
import Container from '@mui/material/Container';
import TestRoundTable from '../components/TestRoundTable';
import UploadStudent from '../components/UploadStudent';
import Modal from '@mui/material/Modal';
import { Box } from "@mui/system";
import { Paper } from '@mui/material';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };  

const UploadStudentForm=(props)=>{
    const [studentCSV,setStudentCSV]=React.useState();
    const handleFileChange=(e)=>{
        if(e.target.files){
            setStudentCSV(e.target.files[0]);
        }
    }
    const handleSubmit=()=>{
        if(!studentCSV){
            return;
        }

    }
    return (
        <Modal open={props.open}
        onClose={()=>{props.handleClose();}}
        sx={{
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
        }}
        >
        <Paper sx={style}>
        <form onSubmit={handleSubmit}>
        <input type={"file"} accept={".csv"} onChange={handleFileChange}></input>
        <input type={"submit"}></input>
        </form> 
        </Paper>
        
        </Modal>
    )
}

const  Dashboard=()=>{
    const token = useSelector((state)=>state.token.token)
    const config = {
        headers : {
            'Authorization' : 'Token ' + token ,
        }
    }


    const roundState = useSelector((state)=>state.round)
    const [openStudentUploadModal,setOpenStudentUploadModal] = React.useState(false)
    const [openCheckboxSelection,setOpenCheckboxSelection]=React.useState(false)
    const [selectedStudent,setSelectedStudent]=React.useState([]);
    const [roundType,setRoundType]=React.useState("")
    const handleSelectedStudent=(itm)=>{
        setSelectedStudent(itm)
    }
    const handleCheckboxSelection=(item)=>{
        setOpenCheckboxSelection(item)
    }
    const [openModal,setOpenModal]=React.useState(false);
    const handleOpenStudentUploadModal=()=>{
        setOpenStudentUploadModal(true);
    }
    const handleCloseStudentUploadModal=()=>{
        setOpenStudentUploadModal(false);
    }
    React.useEffect(()=>{
        setRoundType(roundState.activeRoundType)
    },[roundState.activeRoundType])
    return (
    <div>
        <Container fixed>
        <RoundMenu />
        
        <DashboardTaskBar openCheckboxActions={openCheckboxSelection} selectedStudent={selectedStudent}/>
        {roundState.activeRoundType == 'I' ?
        <InterviewRoundTable    openCheckboxSelection={handleCheckboxSelection} handleSelectedStudent={handleSelectedStudent}/> : <div></div>}
        {roundState.activeRoundType == 'T'? 
        <TestRoundTable openCheckboxSelection={handleCheckboxSelection} handleSelectedStudent={handleSelectedStudent}/> : <div></div>}
    
        <UploadStudent handleOpen={handleOpenStudentUploadModal}/>
        <UploadStudentForm open={openStudentUploadModal} handleClose={handleCloseStudentUploadModal}/>
        </Container>
    </div>
    )
}

export default Dashboard