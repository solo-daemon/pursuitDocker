import { createSlice } from "@reduxjs/toolkit";


const initialState =  {
    studentData : [] ,
    activeStudent : -1 ,
}

const studentSlice = createSlice({
    name : 'student' ,
    initialState ,
    reducers : {
        setStudentData : (state,action)=>{
            state.studentData=action.payload
        },
        setActiveStudent : (state,action)=>{
            state.activeStudent = action.payload
        },
    }
})

export const {setStudentData , setActiveStudent} = studentSlice.actions
export default studentSlice.reducer