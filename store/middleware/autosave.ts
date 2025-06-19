import { Middleware } from '@reduxjs/toolkit';
import { setSaving, markSaved } from '../slices/layoutSlice';

let autosaveTimeout: NodeJS.Timeout | null = null;

export const autosaveMiddleware: Middleware = (store) => (next) => (action) => {
  const result = next(action);
  
  const state = store.getState();
  
  if (state.layout.isDirty && !state.layout.isSaving) {
    if (autosaveTimeout) {
      clearTimeout(autosaveTimeout);
    }
    
    autosaveTimeout = setTimeout(async () => {
      store.dispatch(setSaving(true));
      
      try {
        const layoutConfig = {
          components: state.layout.components,
        };
        
        console.log('Autosaving layout config:', layoutConfig);
        
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        store.dispatch(markSaved());
      } catch (error) {
        console.error('Autosave failed:', error);
      } finally {
        store.dispatch(setSaving(false));
      }
    }, 2000);
  }
  
  return result;
};