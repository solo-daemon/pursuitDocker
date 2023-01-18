import React from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { useSelector } from 'react-redux'
import Box from '@mui/material/Box';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import InfoIcon from '@mui/icons-material/Info';
import { GridActionsCellItem } from '@mui/x-data-grid';
import { MobileDateTimePicker } from '@mui/x-date-pickers/MobileDateTimePicker';
import TextField from '@mui/material/TextField';


const InterveiwDate=(props)=>{
    const[time,setTime]=React.useState(props.time)
    const handleChange=(newvalue)=>{
        const d = new Date(newvalue);
        const t = d.getTime();
        setTime(t);

    }
    
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>

<MobileDateTimePicker
          value={time}
          onChange={(newvalue)=>{handleChange(newvalue)}}
          renderInput={(params) => <TextField {...params} />}
        />
        </LocalizationProvider>
    );
}

const InterviewRoundTable=(props)=>{
    const studentState = useSelector((state)=>state.student)
    const [rows,setRows]=React.useState([{
        id : 1,
        enrollment_no : 575858,

    }])
    const [pageSize, setPageSize] = React.useState(5);
    const handleCheckBoxChange=(itm)=>{
        const selectedItemsLength = itm.length;
        if(selectedItemsLength>0){
            props.openCheckboxSelection(true)
            props.handleSelectedStudent(itm)
        }else if(selectedItemsLength==0){
            props.openCheckboxSelection(false)
        }
    }

    const columns=[
        {
            field : 'enrollment_no',
            headerName : 'Enrollment Number',
            width : '150',
            
        },
        {
            field : 'student_name',
            headerName : 'Student Name',
            type : 'string',
            width : '125',
        },
        {
            field : 'mobile_number',
            headerName : 'Mobile Number',
            width : '125',
            editable : true ,

        },
        {
            field : 'email',
            headerName : 'Email',
            width : '125',
            editable : true,
        },
        {
            field : 'interview_time',
            headerName : 'Interview Time',
            width : '250',
            renderCell : InterveiwDate ,
        },
        {
            field : 'interview_status',
            headerName : 'Status',
            width : '125',
        },
        {
            field : 'interview_location',
            headerName : 'Location',
            width : '125',
        },
        {
            field : 'info',
            headerName : 'Info',
            type : 'actions',
            width : '100',
            getActions : (params)=>[
                <GridActionsCellItem
                    icon={<InfoIcon/>}
                    label="info"
                    onClick={()=>{console.log(params)}}
                />

            ],
        },
    ]
    const interview_time = (millisecond)=>{
        const d = new Date(millisecond)
        return d;
    }
    const createRows=()=>{
        const arr = [];
        studentState.studentData.map((props)=>{
            console.log(props)
            const item = {
                id : props.enrollment_no ,
                enrollment_no : props.enrollment_no , 
                mobile_number : props.mobile_number ,
                student_name : (props.student_name).toUpperCase() ,
                email : props.email ,
                interview_time : ((props.interviews!=undefined && props.interviews.length!=0) ? interview_time(props.interviews[0].start_time):'Not Set') ,
                selection_status : props.selection_status ,
                interview_status : ((props.interviews!=undefined && props.interviews.length!=0 && props.interviews[0].panel.status) ? 'Done' :'Pending') ,
                interview_location : ((props.interviews!=undefined && props.interviews.length!=0) ? props.interviews[0].panel.location : 'Not Set Yet') ,
            }
            arr.push(item);
        })
        return arr;
    }
    console.log(studentState.studentData)
    React.useEffect(()=>{
        setRows(createRows())
    },[studentState.studentData])
    return (
          <Box sx={{
            height : 400,
            width : '100%',
          }}>
            <DataGrid
            autoHeight
            pageSize={pageSize}
            onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
            rowsPerPageOptions={[5,10, 15, 20]}
            pagination
            rows={rows}
            columns={columns}
            checkboxSelection
            disableSelectionOnClick
            experimentalFeatures={{ newEditingApi: true }}
            onSelectionModelChange={itm => handleCheckBoxChange(itm)}
            />
        </Box>
    )
}

export default InterviewRoundTable