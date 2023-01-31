import { Container } from '@mui/system';
import React from 'react'
import { useSelector } from 'react-redux';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { Icon, Tooltip } from '@mui/material';
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

function SectionModal(props){

}
function QuestionModal(props){

}

function Section(props){

    const handleQuestionModalOpen=()=>{

    }
    const handleSectionDelete=()=>{

    }
    return(
        <Paper elevation={3} sx={{
            border: 1,
            p:2,
            m:2,
        }}>
            <Box sx={{
                display:"flex",
                justifyContent:"space-between",
                px: 2,
                py :1
            }}>
                <Typography variant='h4'>
                    props.section_name
                </Typography>
                <Box >
                <Tooltip title="Add Questions">
                
                <IconButton onClick={handleQuestionModalOpen}>
                    <AddCircleIcon/>
                </IconButton>
                </Tooltip>
                <Tooltip  title="Delete Section">
                    <IconButton color="primary" onClick={handleSectionDelete}>
                        <DeleteIcon/>
                    </IconButton>
                </Tooltip>
                </Box>
            </Box>
            <Divider/>
            <Question />
            <Question/>
        </Paper>
    )
}


function Question(){

    return(
        <Paper sx={{p:1,m:2}}>
            <Box sx={{
                display:'flex',
                justifyContent:'space-between',
        }}>
            <Box sx={{display:"flex"}}>
                <Typography variant="h6">props.marks </Typography>
                <Typography variant="h6">Marks</Typography>
            </Box>
            <Box>
            <Tooltip title="Edit Question">
            <IconButton>
                <EditIcon color="primary"/>
            </IconButton>
            </Tooltip>
            <Tooltip title="Delete Question">
            <IconButton>
                <DeleteIcon color="primary"/>
            </IconButton>
            </Tooltip>
            </Box>
            </Box> 
            <Divider/>
            <Box sx={{
                m:2
            }}>
                <Typography variant='body1'>
                props.question
                </Typography>
            </Box>
        </Paper>
    )
}

const Grader = () => {
    const token = useSelector((state) => state.token.token);
    const config = {
        headers : {
            'Authorization' : 'Token ' + token ,
        }
    }
    return(
        <Container fixed>
            <Tooltip title="Add Section">
            <Fab color="primary" aria-label="add">
                <AddIcon />
            </Fab>
            </Tooltip>
            <Section></Section>
        </Container>
    );

};
export default Grader ;