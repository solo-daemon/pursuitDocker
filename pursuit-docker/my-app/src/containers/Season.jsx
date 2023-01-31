import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios'
import SeasonCard from '../components/SeasonCard';
import { Box, Button, CardActions, CardContent, Grid, IconButton } from '@mui/material';
import Modal from '@mui/material/Modal';
import DeleteIcon from '@mui/icons-material/Delete';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import CloseIcon from '@mui/icons-material/Close';
import { useEffect } from 'react';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { setSeasonData, setActiveSeason, setModalSeasonData, setModalSeason } from '../app/features/seasonslice';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import Typography from '@mui/material/Typography';
import RoundCard from '../components/RoundCard'
import Container from '@mui/material/Container';
const url = 'http://localhost:8000/pursuit_app/season'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: window.innerWidth * 0.7,
    height: window.innerHeight * 0.7,
    bgcolor: 'background.paper',
    borderRadius: '10px',
    boxShadow: 24,
    p: 4,
};




function SeasonModal(props) {

    const token = useSelector((state) => state.token.token)
    const season = useSelector((state) => state.season.modalSeason)
    const [modalData, setModalData] = React.useState([])
    const dispatch = useDispatch()
    const modalSeasonData = useSelector((state) => state.season.modalSeasonData)
    const url = 'http://localhost:8000/pursuit_app/season/' + season + '/season_modal/'
    const config = {
        headers: {
            'Authorization': 'Token ' + token,
        }
    }
    const handleSeasonDelete = (id) => {
        const url = 'http://localhost:8000/pursuit_app/season/'+id;
        axios.delete(url,config)
            .then(res=>{
                console.log(res)
            })
            .catch(err=>{
                console.log(err)
            })
    }
    function getSeasonData() {
        axios.get(url, config)
            .then((res) => {
                dispatch(setModalSeasonData(res.data))
            })
    }
    React.useEffect(() => {
        getSeasonData();

    }, [])
    React.useEffect(() => {
        if (modalSeasonData.length == 1) {
            setModalData(modalSeasonData[0])
        } else {
            setModalData([])
        }
    }, [modalSeasonData])
    console.log(modalSeasonData)
    return (
        <Modal
            open={props.open}
            onClose={props.handleClose}
        >

            <Box sx={style}>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',

                }}>
                    <Typography variant="h5" component="div" value={modalData.season_name}>{modalData.season_name}</Typography>
                    <IconButton sx={{
                        position: 'absolute',
                        right: '10px'
                    }}>
                        <CloseIcon onClick={props.handleClose} />
                    </IconButton>
                </Box>

                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    alignItems: 'flex-end',
                    mt: 2,
                }}>

                    <TextField id="standard-basic" label="Season" variant="standard" value={modalData.season_name} />

                    <TextField
                        id="standard-select-currency"
                        select
                        label="Role"
                        value={modalData.sesaon_type == 'D' ? 'Developer' : 'Designer'}
                        variant="standard"
                    >

                        <MenuItem id='D' value='Developer' >Developer</MenuItem>

                        <MenuItem id='d' value='Designer' >Designer</MenuItem>
                    </TextField>


                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <MobileDatePicker
                            views={['year']}
                            label="Season Year"
                            value={String(modalData.season_year)}
                            renderInput={(params) => <TextField {...params} helperText={null} />}
                        />
                    </LocalizationProvider>

                </Box>

                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    flexWrap: 'wrap',
                    mt: 3,
                }}>
                    {(modalData['rounds']) != undefined ? modalData.rounds.map((props) =>
                        <RoundCard round_name={props.round_name} round_type={props.round_type} round_id={props.id}></RoundCard>
                    ) : console.log(modalData['rounds'])}
                    <Fab color="primary" aria-label="fixed" sx={{ display: 'inline-flex', alignItems: 'center' }} >
                        <AddIcon />
                    </Fab>
                </Box>

                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    mt: 2,
                    bottom: 10,
                    width: '100%',
                }}>
                    <Button variant='outlined' startIcon={<DeleteIcon />} onClick={() => {  handleSeasonDelete(modalData.id) ;props.handleClose();}}>Delete</Button>
                    <Button variant='contained' onClick={props.handleClose}>Save</Button>
                </Box>
            </Box>
        </Modal>

    );

}


function RoundAddModal(){
    return (
        <div>round</div>
    )
}

function Season() {
    const dispatch = useDispatch()
    const activeSeason = useSelector((state) => state.season.activeSeason);
    const token = useSelector((state) => state.token.token);
    const [open, setOpen] = React.useState(false)
    const [openRoundModal,setOpenRoundModal] = React.useState(false)
    console.log(activeSeason)
    const handleClick = () => {
        setOpen(true);

    }
    const handleClose = () => {
        setOpen(false)
        setModalSeasonData([])
        setModalSeason(-1)
    }

    let [seasonData, setLocalSeasonData] = React.useState([])

    const getSeasonData = () => {
        const config = {
            headers: {
                'Authorization': 'Token ' + token,
            }
        }
        axios.get(url, config)
            .then(res => {
                setLocalSeasonData(res.data)
                dispatch(setSeasonData(res.data))
            })
            .catch(err => console.log(err))
    }
    useEffect(() => {
        getSeasonData()
    }, []);
    return (
        <Container fixed>
            <div>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    flexWrap: 'wrap',
                }}>
                    {seasonData.map((props) =>
                        <SeasonCard {...props} onClick={() => { setOpen(true); dispatch(setModalSeason(props.id)) }} />
                    )}
                </Box>
                <Fab color="primary" aria-label="fixed" sx={{ position: 'fixed', bottom: '10%', right: '10%' }}
                    onClick={handleClick}
                >
                    <AddIcon />
                </Fab>
                {open &&
                    <SeasonModal open={open} handleClose={handleClose} />
                    
                }
                <RoundAddModal />
            </div>
        </Container>
    )
};


export default Season;