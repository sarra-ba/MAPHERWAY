
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


export const sendAlert = createAsyncThunk('alerts/sendAlert', async (alertData) => {
    const response = await fetch('http://localhost/backend/alerts.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(alertData),
    });

    if (!response.ok) {
        throw new Error('Failed to send alert');
    }

    const result = await response.json();
    return result; 
});

const alertsSlice = createSlice({
    name: 'alerts',
    initialState: {
        status: 'idle', 
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(sendAlert.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(sendAlert.fulfilled, (state) => {
                state.status = 'succeeded';
                
            })
            .addCase(sendAlert.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});


export default alertsSlice.reducer;
