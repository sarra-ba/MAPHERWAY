import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
export const signupUser = createAsyncThunk(
  'auth/signupUser',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await fetch('http://localhost/backend/register.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        try {
          const errorData = await response.json();
          return rejectWithValue(errorData);
        } catch {
          return rejectWithValue({ message: 'An unexpected error occurred' });
        }
      }

      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue({ message: error.message || 'Network error occurred' });
    }
  }
);

const signupSlice = createSlice({
  name: 'signup',
  initialState: {
    loading: false,
    successMessage: '',
    errorMessage: '',
  },
  reducers: {
    resetSignupState: (state) => {
      state.successMessage = '';
      state.errorMessage = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signupUser.pending, (state) => {
        state.loading = true;
        state.successMessage = '';
        state.errorMessage = '';
      })
      .addCase(signupUser.fulfilled, (state) => {
        state.loading = false;
        state.successMessage = 'Signup successful';
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.loading = false;
        state.errorMessage = action.payload.message || 'Signup failed';
      });
  },
});

export const { resetSignupState } = signupSlice.actions;
export default signupSlice.reducer;
