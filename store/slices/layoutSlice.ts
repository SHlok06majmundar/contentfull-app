import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ComponentConfig, LayoutConfig } from '../../types/contentful';

interface LayoutState {
  components: ComponentConfig[];
  history: LayoutConfig[];
  historyIndex: number;
  isDirty: boolean;
  isSaving: boolean;
}

const initialState: LayoutState = {
  components: [],
  history: [{ components: [] }],
  historyIndex: 0,
  isDirty: false,
  isSaving: false,
};

const layoutSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    setComponents: (state, action: PayloadAction<ComponentConfig[]>) => {
      state.components = action.payload;
      state.isDirty = true;
      
      const newLayout = { components: action.payload };
      state.history = state.history.slice(0, state.historyIndex + 1);
      state.history.push(newLayout);
      state.historyIndex = state.history.length - 1;
      
      if (state.history.length > 50) {
        state.history = state.history.slice(-50);
        state.historyIndex = state.history.length - 1;
      }
    },
    addComponent: (state, action: PayloadAction<ComponentConfig>) => {
      state.components.push(action.payload);
      state.isDirty = true;
      
      const newLayout = { components: state.components };
      state.history = state.history.slice(0, state.historyIndex + 1);
      state.history.push(newLayout);
      state.historyIndex = state.history.length - 1;
    },
    removeComponent: (state, action: PayloadAction<string>) => {
      state.components = state.components.filter(c => c.id !== action.payload);
      state.isDirty = true;
      
      const newLayout = { components: state.components };
      state.history = state.history.slice(0, state.historyIndex + 1);
      state.history.push(newLayout);
      state.historyIndex = state.history.length - 1;
    },
    reorderComponents: (state, action: PayloadAction<{ oldIndex: number; newIndex: number }>) => {
      const { oldIndex, newIndex } = action.payload;
      const [removed] = state.components.splice(oldIndex, 1);
      state.components.splice(newIndex, 0, removed);
      state.isDirty = true;
      
      const newLayout = { components: state.components };
      state.history = state.history.slice(0, state.historyIndex + 1);
      state.history.push(newLayout);
      state.historyIndex = state.history.length - 1;
    },
    undo: (state) => {
      if (state.historyIndex > 0) {
        state.historyIndex -= 1;
        state.components = state.history[state.historyIndex].components;
        state.isDirty = true;
      }
    },
    redo: (state) => {
      if (state.historyIndex < state.history.length - 1) {
        state.historyIndex += 1;
        state.components = state.history[state.historyIndex].components;
        state.isDirty = true;
      }
    },
    setSaving: (state, action: PayloadAction<boolean>) => {
      state.isSaving = action.payload;
    },
    markSaved: (state) => {
      state.isDirty = false;
    },
    loadLayout: (state, action: PayloadAction<LayoutConfig>) => {
      state.components = action.payload.components;
      state.history = [action.payload];
      state.historyIndex = 0;
      state.isDirty = false;
    },
  },
});

export const {
  setComponents,
  addComponent,
  removeComponent,
  reorderComponents,
  undo,
  redo,
  setSaving,
  markSaved,
  loadLayout,
} = layoutSlice.actions;

export default layoutSlice.reducer;