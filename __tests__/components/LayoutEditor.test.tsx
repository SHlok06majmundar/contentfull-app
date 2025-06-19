import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { LayoutEditor } from '../../components/contentful-app/LayoutEditor';
import layoutReducer from '../../store/slices/layoutSlice';

const mockStore = configureStore({
  reducer: {
    layout: layoutReducer,
  },
});

describe('LayoutEditor', () => {
  it('renders correctly', () => {
    render(
      <Provider store={mockStore}>
        <LayoutEditor />
      </Provider>
    );
    
    expect(screen.getByText('Landing Page Builder')).toBeInTheDocument();
    expect(screen.getByText('Undo')).toBeInTheDocument();
    expect(screen.getByText('Redo')).toBeInTheDocument();
  });

  it('shows empty state when no components', () => {
    render(
      <Provider store={mockStore}>
        <LayoutEditor />
      </Provider>
    );
    
    expect(screen.getByText('Start building your landing page')).toBeInTheDocument();
    expect(screen.getByText('Drag components from the palette to get started')).toBeInTheDocument();
  });
});