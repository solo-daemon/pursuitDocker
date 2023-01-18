import { configureStore } from '@reduxjs/toolkit';
import tokenReducer from './features/tokenslice'
import screenReducer from './features/screenslice'
import userReducer from './features/userslice'
import seasonReducer from './features/seasonslice'
import roundReducer from './features/roundslice'
import studentReducer from './features/studentslice'
import profileReducer from './features/profileslice'
export const store = configureStore({
  reducer: {
    token : tokenReducer ,
    screen : screenReducer ,
    user : userReducer ,
    season : seasonReducer ,
    round : roundReducer ,
    student : studentReducer , 
    profile : profileReducer ,
  },
});
