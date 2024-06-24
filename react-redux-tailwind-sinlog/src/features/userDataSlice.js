import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-hot-toast';

export const loginUser = createAsyncThunk('userAuth/loginUser', async ({ email, password }, { rejectWithValue }) => {
    try {
        const response = await fetch('http://localhost:3000/api/user/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        });
        const data = await response.json();
        if (response.ok) {
            localStorage.setItem('token', data.token);
            localStorage.setItem('email', email);
            toast.success('Login Successfully!');
            return data;
        } else {
            toast.error(data.message);
            return rejectWithValue(data.message);
        }
    } catch (error) {
        toast.error('An error occurred');
        return rejectWithValue(error.message);
    }
});

export const signupUser = createAsyncThunk('userAuth/signupUser', async ({ firstname, lastname, email, password }, { rejectWithValue }) => {
    try {
        const response = await fetch('http://localhost:3000/api/user/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ firstname, lastname, email, password }),
        });
        const data = await response.json();
        if (response.ok) {
            toast.success('Signup Successfully!');
            return data;
        } else {
            toast.error(data.message);
            return rejectWithValue(data.message);
        }
    } catch (error) {
        toast.error('An error occurred');
        return rejectWithValue(error.message);
    }
});


export const userAuth = createSlice({
    name: 'userAuth',
    initialState: {
        user: null,
        loading: false,
        error: null,
    },
    reducers: {
        logout: (state) => {
            state.user = null;
            localStorage.removeItem('email');
            localStorage.removeItem('token');
            window.location.reload();
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(signupUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(signupUser.fulfilled, (state, action) => {
                state.loading = false;
            })
            .addCase(signupUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    }
})

export const { logout } = userAuth.actions;

export default userAuth.reducer;