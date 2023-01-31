import { Container } from '@mui/system';
import React from 'react'
import { useSelector } from 'react-redux';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { Button, Icon, Tooltip } from '@mui/material';
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
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import RoundMenu from '../../components/RoundMenu2';


const sectionModalStyle = {
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

const questionModalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 6,
    display: 'felx',
    justifyContent: 'center'
};

function SectionModal(props) {
    console.log(props)
    return (
        <Modal
            open={props.open}
            onClose={() => { props.onClose() }}
        >
            <Paper style={{ ...sectionModalStyle }}>
                <FormControl sx={{ p: 2, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <Input id='section-heading-create' sx={{ m: 2 }} placeholder="Section Name" value='' onChange={console.log('hello')}></Input>
                    <Button type="submit" variant="contained" sx={{ m: 2 }}>Create Section</Button>
                </FormControl>
            </Paper>
        </Modal>
    );
}
function QuestionModal(props) {
    return (
        <Modal open={props.open}
            onClose={() => { props.onClose() }}

        >
            <Paper style={{ ...questionModalStyle }}>
                <FormControl sx={{ p: 2, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <TextField id='question-create-maximum-marks' placeholder='Maximum Marks' type='number' sx={{ m: 1 }} />
                    <TextareaAutosize id="question-create" placeholder='Write Question here' maxRows={4} sx={{ m: 1 }} />
                    <Button type="submit" variant="contained" sx={{ m: 2 }}>Create Section</Button>
                </FormControl>
            </Paper>
        </Modal>
    )
}

function Section(props) {

    const handleQuestionModalOpen = () => {

    }
    const handleSectionDelete = () => {

    }
    return (
        <Paper elevation={3} sx={{
            border: 1,
            p: 2,
            m: 2,
        }}>
            <Box sx={{
                display: "flex",
                justifyContent: "space-between",
                px: 2,
                py: 1
            }}>
                <Typography variant='h4'>
                    props.section_name
                </Typography>
                <Box >
                    <Tooltip title="Add Questions">

                        <IconButton onClick={props.openQuestionModal}>
                            <AddCircleIcon />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Delete Section">
                        <IconButton color="primary" onClick={handleSectionDelete}>
                            <DeleteIcon />
                        </IconButton>
                    </Tooltip>
                </Box>
            </Box>
            <Divider />
            <QuestionCard />
            <QuestionCard />
        </Paper>
    )
}


function QuestionCard() {

    return (
        <Paper sx={{ p: 1, m: 2 }}>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
            }}>
                <Box sx={{ display: "flex" }}>
                    <TextField variant="standard" sx={{width:'50px'}} value={10}>props.marks </TextField>
                    <Typography variant="h6">Marks</Typography>
                </Box>
                <Box>
                    <Tooltip title="Edit Question">
                        <IconButton>
                            <EditIcon color="primary" />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Delete Question">
                        <IconButton>
                            <DeleteIcon color="primary" />
                        </IconButton>
                    </Tooltip>
                </Box>
            </Box>
            <Divider />
            <Box sx={{
                m: 2
            }}>
                <Typography variant='body1'>
                    props.question
                </Typography>
            </Box>
        </Paper>
    )
}

const Question = () => {
    const [questionModalOpen, setQuestionModalOpen] = React.useState();
    const [sectionModalOpen, setSectionModalOpen] = React.useState();

    const handleQuestionModalOpen = () => {
        setQuestionModalOpen(true);

    }
    const handleQuestionModalClose = () => {
        setQuestionModalOpen(false);
    }
    const handleSectionModalOpen = () => {
        setSectionModalOpen(true);

    }
    const handleSectionModalClose = () => {
        setSectionModalOpen(false);
    }
    const token = useSelector((state) => state.token.token);
    const config = {
        headers: {
            'Authorization': 'Token ' + token,
        }
    }
    console.log(sectionModalOpen)
    return (
        <Container fixed>
            <RoundMenu />
            <Tooltip title="Add Section">
                <Fab color="primary" aria-label="add" onClick={handleSectionModalOpen}>
                    <AddIcon />
                </Fab>
            </Tooltip>
            <Section openQuestionModal={handleQuestionModalOpen}></Section>
            <SectionModal open={sectionModalOpen} onClose={handleSectionModalClose} />
            <QuestionModal open={questionModalOpen} onClose={handleQuestionModalClose} />
        </Container>
    );

};
export default Question;
