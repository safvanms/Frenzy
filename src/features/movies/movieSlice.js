import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import MovieApi from '../../common/apis/MovieApi';
import { ApiKey } from '../../common/apis/MovieApiKey';


export const fetchAsyncMovies = createAsyncThunk(
     'movies/fetchAsyncMovies',
     async (term) => {
          const response = await MovieApi.get(
               `?apiKey=${ApiKey}&s=${term}&type=movie`,)
          return response.data;
     });


export const fetchAsyncShows = createAsyncThunk(
     'movies/fetchAsyncShows',
     async (term) => {
          const response = await MovieApi.get(
               `?apiKey=${ApiKey}&s=${term}&type=series`,)
          return response.data;
     });


export const fetchAsyncMovieShowDetails = createAsyncThunk(
     'movies/fetchAsyncMovieShowDetails',
     async (id) => {
          const response = await MovieApi.get(
               `?apiKey=${ApiKey}&i=${id}&Plot=full`,)
          return response.data;
     });


const initialState = {
     movies: {},
     shows: {},
     selectedMovieOrShow: {},
     loading : false,
};

const movieSlice = createSlice({
     name: "movies",
     initialState,
     reducers: {
          removeSelectedEvent: (state) => {
               state.selectedMovieOrShow = {};
          },
     },
     extraReducers: {
          [fetchAsyncMovies.pending]: () => {
               loading=true ;
               console.log('Pending');
          },

          [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
               console.log('fetched successfully');
               return { ...state, movies: payload }

          },
          [fetchAsyncMovies.rejected]: () => {
               loading = false;
               console.log('rejected');
               
          },
          [fetchAsyncShows.fulfilled]: (state, { payload }) => {
               console.log('fetched successfully');
               loading = false;
               return { ...state, shows: payload }
          },
          [fetchAsyncMovieShowDetails.fulfilled]: (state, { payload }) => {
               console.log('fetched successfully');
               loading = false;
               return { ...state, selectedMovieOrShow: payload }
          },
     },
});

export const { removeSelectedEvent } = movieSlice.actions;
export let  { loading } = movieSlice.actions;

// to fetch a value from store
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const selectedMovieOrShow = (state) => state.movies.selectedMovieOrShow;

export default movieSlice.reducer;
