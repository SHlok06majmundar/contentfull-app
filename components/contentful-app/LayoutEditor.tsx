'use client';

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DndContext, DragEndEvent, DragOverlay, DragStartEvent } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { RootState } from '../../store';
import { reorderComponents, loadLayout, undo, redo } from '../../store/slices/layoutSlice';
import { ComponentConfig } from '../../types/contentful';
import { DraggableComponent } from './DraggableComponent';
import { ComponentPalette } from './ComponentPalette';
import { PreviewButton } from './PreviewButton';
import styles from './LayoutEditor.module.css';

export function LayoutEditor() {
  const dispatch = useDispatch();
  const { components, historyIndex, history, isDirty, isSaving } = useSelector(
    (state: RootState) => state.layout
  );

  const canUndo = historyIndex > 0;
  const canRedo = historyIndex < history.length - 1;

  useEffect(() => {
    if (components.length === 0) {
      const initialLayout = {
        components: [],
      };
      dispatch(loadLayout(initialLayout));
    }
  }, [dispatch, components.length]);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    
    if (!over || active.id === over.id) return;
    
    const oldIndex = components.findIndex(c => c.id === active.id);
    const newIndex = components.findIndex(c => c.id === over.id);
    
    if (oldIndex !== -1 && newIndex !== -1) {
      dispatch(reorderComponents({ oldIndex, newIndex }));
    }
  };

  const handleUndo = () => {
    if (canUndo) {
      dispatch(undo());
    }
  };

  const handleRedo = () => {
    if (canRedo) {
      dispatch(redo());
    }
  };

  return (
    <div className={styles.layoutEditor}>
      <div className={styles.header}>
        <h1>Landing Page Builder</h1>
        <div className={styles.controls}>
          <button
            onClick={handleUndo}
            disabled={!canUndo}
            className={styles.controlButton}
            title="Undo last action"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 7v6h6" />
              <path d="M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13" />
            </svg>
            Undo
          </button>
          <button
            onClick={handleRedo}
            disabled={!canRedo}
            className={styles.controlButton}
            title="Redo last action"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 7v6h-6" />
              <path d="M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7" />
            </svg>
            Redo
          </button>
          <PreviewButton pageSlug="page-1" />
          <div className={styles.status}>
            {isSaving ? 'Saving...' : isDirty ? 'Unsaved changes' : 'Saved'}
          </div>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.palette}>
          <ComponentPalette />
        </div>

        <div className={styles.canvas}>
          <DndContext onDragEnd={handleDragEnd}>
            <SortableContext items={components.map(c => c.id)} strategy={verticalListSortingStrategy}>
              <div className={styles.componentList}>
                {components.map((component) => (
                  <DraggableComponent key={component.id} component={component} />
                ))}
              </div>
            </SortableContext>
          </DndContext>
          
          {components.length === 0 && (
            <div className={styles.emptyState}>
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <line x1="9" y1="9" x2="15" y2="15" />
                <line x1="15" y1="9" x2="9" y2="15" />
              </svg>
              <h3>Start building your landing page</h3>
              <p>Drag components from the palette to get started</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}