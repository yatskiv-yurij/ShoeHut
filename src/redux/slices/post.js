import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";

export const fetchNewPost = createAsyncThunk('post/fetchNewPost', async(params) => {
    const {data} = await axios.post('/posts', params);
    return data;
});

export const fetchAllPosts = createAsyncThunk('post/fetchAllPosts', async(params) => {
    const {data} = await axios.get('/posts', params);
    return data;
});

const initialState = {
    posts: {
        data:null,
        status: 'loading',  
    }
};

const postSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchAllPosts.pending]:  (state) => {
            state.posts.status = 'loading';
            state.posts.data = null;
        },
        [fetchAllPosts.fulfilled]:  (state, action) => {
            state.posts.status = 'loaded';
            state.posts.data = action.payload;
        },
        [fetchAllPosts.reject]:  (state) => {
            state.posts.status = 'error';
            state.posts.data = null;
        },
    }

});

export const postReducer = postSlice.reducer