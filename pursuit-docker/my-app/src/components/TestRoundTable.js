import React from 'react';
import { DataGrid } from '@mui/x-data-grid'
import { useSelector } from 'react-redux'
import Box from '@mui/material/Box';
import InfoIcon from '@mui/icons-material/Info';
import { GridActionsCellItem } from '@mui/x-data-grid';
import TextField from '@mui/material/TextField';

const TestRoundTable=(props)=>{

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
            width : '200',
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
            field : 'info',
            headerName : 'Info',
            type : 'actions',
            width : '100',
            getActions : (params)=>[
                <GridActionsCellItem
                    icon={<InfoIcon/>}
                    label="info"
                    
                />

            ],
        },
    ]
    const createRows=()=>{
        const arr = [];
        studentState.studentData.map((props)=>{
            const item = {
                id : props.enrollment_no,
                enrollment_no : props.enrollment_no,
                mobile_number : props.mobile_number,
                student_name : (props.student_name).toUpperCase(),
                email : props.email,
                selection_status : props.selection_status,
            }
            arr.push(item);
        })
        return arr;
    }
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


export default TestRoundTable