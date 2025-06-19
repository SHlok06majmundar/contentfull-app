'use client';

import { useSelector } from 'react-redux';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '../../../store';
import { RootState } from '../../../store';
import { Navigation } from '../../../components/layout/Navigation';
import { HeroBlock } from '../../../components/blocks/HeroBlock';
import { TwoColumnRow } from '../../../components/blocks/TwoColumnRow';
import { ImageGrid } from '../../../components/blocks/ImageGrid';
import { ComponentConfig } from '../../../types/contentful';

function PreviewContent() {
  const { components } = useSelector((state: RootState) => state.layout);

  const renderComponent = (component: ComponentConfig) => {
    switch (component.type) {
      case 'hero':
        return <HeroBlock key={component.id} data={component.data as any} />;
      case 'twoColumn':
        return <TwoColumnRow key={component.id} data={component.data as any} />;
      case 'imageGrid':
        return <ImageGrid key={component.id} data={component.data as any} />;
      default:
        return null;
    }
  };

  return (
    <>
      <Navigation />
      <main>
        {components.length === 0 ? (
          <div style={{
            height: '50vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            color: '#6b7280',
            textAlign: 'center'
          }}>
            <h2>No components to preview</h2>
            <p>Add components in the editor to see them here</p>
          </div>
        ) : (
          components.map(renderComponent)
        )}
      </main>
    </>
  );
}

export default function PreviewPage() {
  return (
    <Provider store={store}>
      <PersistGate loading={<div>Loading preview...</div>} persistor={persistor}>
        <PreviewContent />
      </PersistGate>
    </Provider>
  );
}