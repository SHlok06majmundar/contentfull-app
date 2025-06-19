import layoutReducer, {
  addComponent,
  removeComponent,
  reorderComponents,
  undo,
  redo,
} from '../../store/slices/layoutSlice';
import { ComponentConfig } from '../../types/contentful';

describe('layoutSlice', () => {
  const initialState = {
    components: [],
    history: [{ components: [] }],
    historyIndex: 0,
    isDirty: false,
    isSaving: false,
  };

  const mockComponent: ComponentConfig = {
    id: 'test-1',
    type: 'hero',
    data: {
      heading: 'Test Hero',
      subtitle: 'Test subtitle',
      ctaText: 'Test CTA',
      ctaUrl: '/test',
      backgroundImage: {
        sys: { id: 'test-bg' },
        title: 'Test Background',
        description: 'Test description',
        url: 'https://example.com/test.jpg',
        width: 1200,
        height: 600,
      },
    },
  };

  it('should add a component', () => {
    const result = layoutReducer(initialState, addComponent(mockComponent));
    
    expect(result.components).toHaveLength(1);
    expect(result.components[0]).toEqual(mockComponent);
    expect(result.isDirty).toBe(true);
    expect(result.history).toHaveLength(2);
  });

  it('should remove a component', () => {
    const stateWithComponent = {
      ...initialState,
      components: [mockComponent],
    };
    
    const result = layoutReducer(stateWithComponent, removeComponent('test-1'));
    
    expect(result.components).toHaveLength(0);
    expect(result.isDirty).toBe(true);
  });

  it('should reorder components', () => {
    const component2: ComponentConfig = {
      ...mockComponent,
      id: 'test-2',
    };
    
    const stateWithComponents = {
      ...initialState,
      components: [mockComponent, component2],
    };
    
    const result = layoutReducer(
      stateWithComponents,
      reorderComponents({ oldIndex: 0, newIndex: 1 })
    );
    
    expect(result.components[0].id).toBe('test-2');
    expect(result.components[1].id).toBe('test-1');
  });

  it('should handle undo/redo', () => {
    let state = layoutReducer(initialState, addComponent(mockComponent));
    
    const stateAfterAdd = { ...state };
    
    state = layoutReducer(state, undo());
    expect(state.components).toHaveLength(0);
    
    state = layoutReducer(state, redo());
    expect(state.components).toHaveLength(1);
    expect(state.components[0]).toEqual(mockComponent);
  });
});