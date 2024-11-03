import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    const response = await fetch('http://localhost/backend/market.php'); // Adjust the URL as needed
    if (!response.ok) {
        throw new Error('Failed to fetch products');
    }
    const data = await response.json();
    return data;
});

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        products: [],
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = 'loading'; 
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = 'succeeded'; 
                state.products = action.payload; 
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = 'failed'; 
                state.error = action.error.message; 
            });
    },
});
export const selectAllProducts = (state) => state.products.products;
export const selectProductsStatus = (state) => state.products.status;
export const selectProductsError = (state) => state.products.error;
export default productsSlice.reducer;
