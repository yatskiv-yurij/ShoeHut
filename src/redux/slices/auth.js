import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";

export const fetchUserData = createAsyncThunk('auth/fetchUserData', async(params) => {
    const {data} = await axios.post('/auth/login', params);
    return data;
});

export const fetchAuthMe = createAsyncThunk('auth/fetchAuthMe', async(params) => {
    const {data} = await axios.get('/auth/me', params);
    return data;
});

export const fetchRegister = createAsyncThunk('auth/fetchRegister', async(params) => {
    const {data} = await axios.post('/auth/register', params);
    return data;
});

export const fetchUpdate = createAsyncThunk('auth/fetchUpdate', async(params) => {
    const {data} = await axios.patch('/auth/update', params);
    return data;
});

const initialState = {
    auth: {
        data:null,
        status: 'loading',  
    },
    
    success: {
        data:null,
        status: 'loading',  
    }
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.auth.data = null;
        }
    },
    extraReducers: {
        [fetchUserData.pending]:  (state) => {
            state.auth.status = 'loading';
            state.auth.data = null;
        },
        [fetchUserData.fulfilled]:  (state, action) => {
            state.auth.status = 'loaded';
            state.auth.data = action.payload;
        },
        [fetchUserData.reject]:  (state) => {
            state.auth.status = 'error';
            state.auth.data = null;
        },
        [fetchAuthMe.pending]:  (state) => {
            state.auth.status = 'loading';
            state.auth.data = null;
        },
        [fetchAuthMe.fulfilled]:  (state, action) => {
            state.auth.status = 'loaded';
            state.auth.data = action.payload;
        },
        [fetchAuthMe.reject]:  (state) => {
            state.auth.status = 'error';
            state.auth.data = null;
        },
        [fetchRegister.pending]:  (state) => {
            state.auth.status = 'loading';
            state.auth.data = null;
        },
        [fetchRegister.fulfilled]:  (state, action) => {
            state.auth.status = 'loaded';
            state.auth.data = action.payload;
        },
        [fetchRegister.reject]:  (state) => {
            state.auth.status = 'error';
            state.auth.data = null;
        },
        [fetchUpdate.pending]:  (state) => {
            state.success.status = 'loading';
            state.success.data = null;
        },
        [fetchUpdate.fulfilled]:  (state, action) => {
            state.success.status = 'loaded';
            state.success.data = action.payload;
        },
        [fetchUpdate.reject]:  (state) => {
            state.success.status = 'error';
            state.success.data = null;
        }
    }
});

export const selectIsAuth = state => Boolean(state.auth.auth.data);

export const authReducer = authSlice.reducer

export const { logout } = authSlice.actions;