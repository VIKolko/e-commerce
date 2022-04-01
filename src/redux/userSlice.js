import {createSlice} from '@reduxjs/toolkit';


const userSlice = createSlice({
    name: "user",
    initialState: {
      currentUser: null,
      wishList:null,
      isFetching: false,
      error: false,
    },
    reducers: {
      loginStart: (state) => {
        state.isFetching = true;
        state.error = false;
      },
      loginSuccess: (state, action) => {
        state.isFetching = false;
        state.currentUser = action.payload;
        state.wishList = true;
        state.error = false;
      },
      loginFailure: (state) => {
        state.isFetching = false;
        state.error = true;
      },
      logOut: (state)=>{
        state.isFetching = false;
        state.error = false;
        state.currentUser = null;
        state.wishList = true;
        
      },
      signupStart: (state)=>{
        state.isFetching = true;
        state.error = false;
      }
      ,
      signupFailure:(state)=>{
        state.error = true;
        state.isFetching = false;
      },
      signupSuccess:(state,action)=>{
        state.isFetching = false;
        state.currentUser = action.payload;
        state.wishList = true;
        state.error = false
      },
    },
  });

export const {loginStart,
  loginSuccess,
  loginFailure,
  logOut,
  signupStart,
  signupFailure,
  signupSuccess
} = userSlice.actions;
export default userSlice.reducer;