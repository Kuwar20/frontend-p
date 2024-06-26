import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// create action
export const createUser = createAsyncThunk("createUser", async (data, { rejectWithValue }) => {
    const response = await fetch("https://666fc0fe0900b5f872481dcc.mockapi.io/crud", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    try {
        const result = await response.json();
        return result;
    } catch (error) {
        return rejectWithValue(error.response);
    }
});

// read action
// this will return promise, and we will handle it in extraReducers
export const showUser = createAsyncThunk("showUser", async (args, { rejectWithValue }) => {
    const response = await fetch("https://666fc0fe0900b5f872481dcc.mockapi.io/crud");
    // by default fetch is a get request so dont need to write it, even though you can
    try {
        const result = await response.json();
        console.log(result);
        return result;
    } catch (error) {
        return rejectWithValue(error.response)
    }
})

// delete action
export const deleteUser = createAsyncThunk("deleteUser", async (id, { rejectWithValue }) => {
    const response = await fetch(`https://666fc0fe0900b5f872481dcc.mockapi.io/crud/${id}`, {
        method: "DELETE"
    });

    try {
        const result = await response.json();
        return result;
    } catch (error) {
        return rejectWithValue(error.response);
    }
});

export const updateData = createAsyncThunk("updateData", async (data, { rejectWithValue }) => {
    console.log("updated data", data);
    const response = await fetch(`https://666fc0fe0900b5f872481dcc.mockapi.io/crud/${data.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    try {
        const result = await response.json();
        return result;
    } catch (error) {
        return rejectWithValue(error.response);
    }
});

export const userDetail = createSlice({
    name: "userDetail",
    initialState: {
        users: [],
        loading: false,
        error: null,
        searchData: [],
    },
    reducers: {
        searchUser: (state, action) => {
            console.log("search data", action.payload);
            state.searchData = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(createUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(createUser.fulfilled, (state, action) => {
                state.loading = false;
                state.users.push(action.payload);
            })
            .addCase(createUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(showUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(showUser.fulfilled, (state, action) => {
                state.loading = false;
                state.users = action.payload;
            })
            .addCase(showUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(deleteUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(deleteUser.fulfilled, (state, action) => {
                state.loading = false;
                state.users = state.users.filter((user) => user.id !== action.payload.id);
            })
            .addCase(deleteUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(updateData.pending, (state) => {
                state.loading = true;
            })
            .addCase(updateData.fulfilled, (state, action) => {
                state.loading = false;
                state.users = state.users.map((user) => {
                    if (user.id === action.payload.id) {
                        return action.payload;
                    }
                    return user;
                });
            })
            .addCase(updateData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default userDetail.reducer;

export const { searchUser } = userDetail.actions;