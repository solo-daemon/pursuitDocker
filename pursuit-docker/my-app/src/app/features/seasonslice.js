import { createSlice } from "@reduxjs/toolkit";

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        console.log(c.substring(name.length, c.length))
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

const initialState = {
    seasonData : [] ,
    activeSeason : getCookie('activeSeason') ,
    modalSeasonData : [],
    modalSeason : -1,
}

export const seasonSlice = createSlice({
    name : 'season' ,
    initialState ,

    reducers : {
        setSeasonData : (state,action)=>{
            state.seasonData = action.payload
        },
        setActiveSeason : (state,action)=>{
            state.activeSeason = action.payload
            document.cookie="activeSeason="+state.activeSeason
        } ,
        setModalSeasonData : (state,action)=>{
            state.modalSeasonData=action.payload
        } ,
        setModalSeason : (state,action)=>{
            state.modalSeason=action.payload
        },
    }

});
export const{setSeasonData,setActiveSeason,setModalSeasonData,setModalSeason} = seasonSlice.actions
export default  seasonSlice.reducer