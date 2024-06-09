import { createSlice } from "@reduxjs/toolkit";


const movieSlice = createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies: null,
        addTrailerVideo: null,
    },
    reducers: {
        addNowPlayingMovies:(state, action)=>{
            state.nowPlayingMovies = action.payload;
        },
        addTrailerVideo: (state, action) =>{
            console.log(action.payload)
            state.addTrailerVideo = action.payload;
        }
    }
});

export const {addNowPlayingMovies, addTrailerVideo} = movieSlice.actions;

export default movieSlice.reducer;