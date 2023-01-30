import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    value : 'h'
}
export const screenSlice = createSlice({
    name : 'screen',
    initialState ,
    reducers : {
        homeScreen : (state) => {
            state.value = 'h' ;
            console.log(state.value)
        } ,
        dashboardScreen : (state) => {
            state.value = 'd' ;
            console.log(state.value)
        }
    }

});

export const {homeScreen,dashboardScreen} = screenSlice.actions
export default screenSlice.reducer