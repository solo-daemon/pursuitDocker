import React   from "react";
import { Box } from "@mui/system";
import Button from '@mui/material/Button';
import AddCircleIcon from '@mui/icons-material/AddCircle';


const UploadStudnet=(props)=>{

    return (
        <Button variant="outlined"
        sx={{
            
            position:'fixed',
            bottom:0,
            width:'85%',
            py: 2,
        }}
        startIcon={<AddCircleIcon/>}
        onClick={()=>{props.handleOpen();}}
        >
            Add Students
        </Button>
    )
}

export default UploadStudnet;
