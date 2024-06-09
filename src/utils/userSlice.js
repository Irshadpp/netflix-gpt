import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: null,
    reducers:{
        addUser: (state, action) =>{
            console.log("00000000000000000000000000000000", action, state)
            return action.payload
        },
        removeUser: (state, action) =>{
            return null;
        }
    }
});

export const {addUser, removeUser} = userSlice.actions;

export default userSlice.reducer;