import {createSlice} from "@reduxjs/toolkit";
const initialState = {
    isAuthenticated : false ,
    previsAuthenticated : true ,
};

export const userSlice = createSlice({
    name : 'user' ,
    initialState ,
    reducers : {
        login : (state) => {
            state.isAuthenticated = true;
            
        } ,
        logout : (state) => {
            state.isAuthenticated = false
            localStorage.removeItem('token')
        } ,
    } ,
});

export const {login , logout }= userSlice.actions 
export default userSlice.reducer

