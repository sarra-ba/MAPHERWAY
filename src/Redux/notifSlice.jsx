import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchNotifications = createAsyncThunk('notifications/fetchNotifications', async () => {
    const response = await fetch('http://localhost/backend/notif.php'); 
    if (!response.ok) {
        throw new Error('Failed to fetch notifications');
    }
    return response.json(); 
});

const notificationsSlice = createSlice({
    name: 'notifications',
    initialState: {
        notifications: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchNotifications.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchNotifications.fulfilled, (state, action) => {
                state.loading = false;
                state.notifications = action.payload; 
            })
            .addCase(fetchNotifications.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message; 
            });
    },
});

export default notificationsSlice.reducer;
