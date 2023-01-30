import { createSlice } from "@reduxjs/toolkit";

const token = localStorage.getItem("token") ? localStorage.getItem("token") : null

const initialState = {
    token ,
}



export const tokenSlice = createSlice({
    name : 'token' ,
    initialState ,
    reducers : {
        setToken : (state) => {
            state.token = localStorage.getItem("token") ? localStorage.getItem("token") : null ;
        } ,
        removeToken : (state) =>{
            localStorage.removeItem("token") ;
            state.token = null ;
        }
    }
})

export const {setToken , removeToken} = tokenSlice.actions
export default tokenSlice.reducer;