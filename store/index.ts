import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import layoutReducer from './slices/layoutSlice';
import { autosaveMiddleware } from './middleware/autosave';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['layout'],
};

const persistedReducer = persistReducer(persistConfig, layoutReducer);

export const store = configureStore({
  reducer: {
    layout: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }).concat(autosaveMiddleware),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;