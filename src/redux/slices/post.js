import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";

export const fetchNewPost= createAsyncThunk('auth/fetchNewPost', async(params) => {
    const {data} = await axios.post('/posts', params);
    return data;
});

export const fetchAddImages= createAsyncThunk('auth/fetchAddImages', async(params) => {
    const {data} = await axios.post('/upload', params);
    return data;
});

const initialState = {
    posts: {
        data:null,
        status: 'loading',  
    },
    
    images: {
        data:null,
        status: 'loading',  
    }
};

const postSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchAddImages.pending]:  (state) => {
            state.images.status = 'loading';
            state.images.data = null;
        },
        [fetchAddImages.fulfilled]:  (state, action) => {
            state.images.status = 'loaded';
            state.images.data = action.payload;
        },
        [fetchAddImages.reject]:  (state) => {
            state.images.status = 'error';
            state.images.data = null;
        },
    }

});

export const postReducer = postSlice.reducer