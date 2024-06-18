import { configureStore } from '@reduxjs/toolkit';
import {deviceReducer} from '@/store/deviceSlice';

export const store = configureStore({ reducer: { device: deviceReducer } });
