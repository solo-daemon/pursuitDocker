import { stepButtonClasses } from '@mui/material';
import axios from 'axios';
import React from 'react';
import { useSelector } from 'react-redux';
import InterviewRoundTable from '../components/InterviewRoundTable2';
import DashboardTaskBar from '../components/DashboardTaskBar';
import RoundMenu from '../components/RoundMenu2';
import Container from '@mui/material/Container';
import TestRoundTable from '../components/TestRoundTable';

const  Dashboard=()=>{
    const token = useSelector((state)=>state.token.token)
    const config = {
        headers : {
            'Authorization' : 'Token ' + token ,
        }
    }


    const roundState = useSelector((state)=>state.round)
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
        </Container>
    </div>
    )
}

export default Dashboard