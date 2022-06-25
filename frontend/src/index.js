import {configureStore, createSlice} from '@reduxjs/toolkit'

const authSlice=createSlice({
    name:"auth",
    initialState:{isLoggendIn:false},
    reducers: {
        login(state){
            state.isLoggendIn=true;
        },
        logout(state){
            localStorage.removeItem("userId");
            state.isLoggendIn=false;
        },
    },

});
export const authActions=authSlice.actions;
export const store=configureStore({
    reducer:authSlice.reducer
})