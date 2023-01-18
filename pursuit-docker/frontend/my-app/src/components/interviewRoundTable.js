import React from 'react'
import { useDemoData } from '@mui/x-data-grid-generator';
import { IconButton, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import { DataGrid } from '@mui/x-data-grid';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import InfoIcon from '@mui/icons-material/Info';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveStudent } from '../app/features/studentslice';
import axios from 'axios';

const interviewDate=(millisecond)=>{
  const d = new Date(millisecond);
  const k = d.getHours()+':'+d.getMinutes()+' '+d.getDate()+'/'+d.getMonth()+'/'+d.getFullYear();
  return k;
}
const InterviewRoundTable=()=>{
  const studentState = useSelector((state)=>state.student)
  const[checked,setChecked]=React.useState()
  const[selectAll,setSelectAll]=React.useState(false)
  const [studentData,setStudentData]=React.useState([])
    const prevChecked = React.useRef()
    function checkedInitiate (){
      const arr = new Map();
      studentState.studentData.map((props)=>{
        arr.set(props.enrollment_no,false)
      })
      return arr;
    }
    function handleChange(enrollment_no){
      prevChecked.current[enrollment_no] = !checked[enrollment_no]
      setChecked(prevChecked.current);
      console.log(prevChecked.current);
    }
    function handleSelectAll(){
      prevChecked.current.forEach((values,keys)=>{
        prevChecked.current[keys]=selectAll?false:true
      })
      const prevSelectAll=selectAll;
      setChecked(prevChecked)
      setSelectAll(!prevSelectAll)
    }
    React.useEffect(()=>{
      setChecked(checkedInitiate()) 
      prevChecked.current=checkedInitiate() 
      setStudentData(studentState.studentData)
    },[studentState.studentData])
console.log(prevChecked.current)
console.log(studentData)
      return(
        <div>
          
        </div>
      );
      // return (
      //   <div style={{ height: 800, width: '95%' ,}}>
      //     <Table component={Paper} stickyHeader>
      //       <TableHead>
      //         <TableRow>
      //           <TableCell >                <Checkbox 
      //             checked={selectAll}
      //             onChange={()=>{handleSelectAll()}}
      //             inputProps={{ 'aria-label': 'controlled' }}
      //             />Enrollement No </TableCell>
      //           <TableCell >Name</TableCell>
      //           <TableCell >Mobile No</TableCell>
      //           <TableCell >Email</TableCell>
      //           <TableCell> Interview Time</TableCell>
      //         </TableRow>
      //       </TableHead>
      //       <TableBody>
              
      //         { (studentData != undefined) ?
      //         studentData.map((props)=>
      //           <TableRow>
                  
      //           <TableCell >
      //           <Checkbox 
      //             checked={checked[props.enrollment_no]}
      //             onChange={()=>{handleChange(props.enrollment_no)}}
      //             inputProps={{ 'aria-label': 'controlled' }}
      //             />
      //             {props.enrollment_no}</TableCell>
      //             <TableCell >{props.student_name}</TableCell>
      //             <TableCell >{props.mobile_number}</TableCell>
      //             <TableCell >{props.email}</TableCell>
      //             <TableCell>
      //               <IconButton>
      //                 {String(interviewDate(props.interviews[0].start_time))}
      //               </IconButton>
      //             </TableCell>
      //             </TableRow>
      //         ) : <TableRow>Add data</TableRow>}
      //       </TableBody>
      //     </Table>
      //   </div>
      // );
}

export default InterviewRoundTable