'use client';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '../../store';
import { LayoutEditor } from '../../components/contentful-app/LayoutEditor';

export default function ContentfulAppPage() {
  return (
    <Provider store={store}>
      <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
        <LayoutEditor />
      </PersistGate>
    </Provider>
  );
}