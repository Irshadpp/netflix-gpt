import { createSlice } from "@reduxjs/toolkit";


const movieSlice = createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies: null,
        trendingMovies: null,
        popularMovies: null,
        topRatedMovies: null,
        upcomingMovies: null,
        addTrailerVideo: null,
    },
    reducers: {
        addNowPlayingMovies:(state, action)=>{
            state.nowPlayingMovies = action.payload;
        },
        addNowTrendingMovies:(state, action)=>{
            state.trendingMovies = action.payload;
        },
        addPopularMovies:(state, action)=>{
            state.popularMovies = action.payload;
        },
        addTopRatedMovies:(state, action)=>{
            state.topRatedMovies = action.payload;
        },
        addUpcomingMovies:(state, action)=>{
            state.upcomingMovies = action.payload;
        },
        addTrailerVideo: (state, action) =>{
            state.addTrailerVideo = action.payload;
        },

    }
});

export const {addNowPlayingMovies, addNowTrendingMovies, addPopularMovies, addTopRatedMovies, addUpcomingMovies, addTrailerVideo} = movieSlice.actions;

export default movieSlice.reducer;