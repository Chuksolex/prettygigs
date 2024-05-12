import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import storage from "redux-persist/lib/storage";
import {
  persistStore,
  persistReducer,
} from 'redux-persist';
import cartSlice from './reducers/cartSlice'; // Create this reducer
import gigsSlice from './reducers/gigsSlice';
import orderSlice from './reducers/orderSlice';
import currencySlice from './reducers/currencySlice';

const rootReducer = combineReducers({
   cartSlice,
   gigsSlice,
   orderSlice,
   currencySlice
});

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

  

export const persistor = persistStore(store);
