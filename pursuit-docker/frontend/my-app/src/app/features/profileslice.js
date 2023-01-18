import { createSlice } from "@reduxjs/toolkit";
const initialState={
    profileData : [] ,
    userId  : -1 ,
}

export const profileSlice = createSlice({
    name : 'profile' ,
    initialState ,
    reducers : {
        setProfileData : (state,action)=>{
            state.profileData = action.payload ;
        } ,
        setUserId : (state,action)=>{
            state.userId = action.payload ;
        } ,
    }
})

export const {setProfileData,setUserId} = profileSlice.actions
export default profileSlice.reducer