import { configureStore } from '@reduxjs/toolkit';
import productsSlice from './productsSliceApi'; 
import alertsReducer from './alertsSlice';
import signupReducer from './RegisterApi'; 
import authReducer from './LoginApi';
import { contactApi } from './contactApi'; 
import { userApi } from './ApiSlice'; 
import notificationsReducer from './notifSlice';
const store = configureStore({
  reducer: {
    products: productsSlice, 
    alerts: alertsReducer,
    signup: signupReducer, 
    auth: authReducer,
    [contactApi.reducerPath]: contactApi.reducer, 
    [userApi.reducerPath]: userApi.reducer,
    notifications: notificationsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(contactApi.middleware, userApi.middleware),
});

export default store;
