'use client';

import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { useDispatch } from 'react-redux';
import { removeComponent } from '../../store/slices/layoutSlice';
import { ComponentConfig } from '../../types/contentful';
import styles from './DraggableComponent.module.css';

interface DraggableComponentProps {
  component: ComponentConfig;
}

export function DraggableComponent({ component }: DraggableComponentProps) {
  const dispatch = useDispatch();
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: component.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  const handleRemove = () => {
    dispatch(removeComponent(component.id));
  };

  const renderPreview = () => {
    switch (component.type) {
      case 'hero':
        const heroData = component.data as any;
        return (
          <div className={styles.heroPreview}>
            <h3>{heroData.heading}</h3>
            <p>{heroData.subtitle}</p>
            <button className={styles.previewButton}>{heroData.ctaText}</button>
          </div>
        );
      
      case 'twoColumn':
        const twoColData = component.data as any;
        return (
          <div className={styles.twoColumnPreview}>
            <div className={styles.leftColumn}>
              <h3>{twoColData.leftHeading}</h3>
              <p>{twoColData.leftSubtitle}</p>
              <button className={styles.previewButton}>{twoColData.leftCtaText}</button>
            </div>
            <div className={styles.rightColumn}>
              <div className={styles.imagePlaceholder}>Image</div>
            </div>
          </div>
        );
      
      case 'imageGrid':
        const gridData = component.data as any;
        return (
          <div className={styles.gridPreview}>
            {gridData.images.slice(0, 4).map((img: any, index: number) => (
              <div key={index} className={styles.gridItem}>
                <div className={styles.imagePlaceholder}>Img {index + 1}</div>
              </div>
            ))}
          </div>
        );
      
      default:
        return <div>Unknown component</div>;
    }
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={styles.draggableComponent}
      {...attributes}
    >
      <div className={styles.componentHeader}>
        <div className={styles.dragHandle} {...listeners}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
            <path d="M7 2a2 2 0 1 1 .001 4.001A2 2 0 0 1 7 2zm0 6a2 2 0 1 1 .001 4.001A2 2 0 0 1 7 8zm0 6a2 2 0 1 1 .001 4.001A2 2 0 0 1 7 14zm6-8a2 2 0 1 1-.001-4.001A2 2 0 0 1 13 6zm0 2a2 2 0 1 1 .001 4.001A2 2 0 0 1 13 8zm0 6a2 2 0 1 1 .001 4.001A2 2 0 0 1 13 14z"/>
          </svg>
        </div>
        <span className={styles.componentType}>
          {component.type === 'hero' && 'Hero Block'}
          {component.type === 'twoColumn' && 'Two Column Row'}
          {component.type === 'imageGrid' && 'Image Grid'}
        </span>
        <button className={styles.removeButton} onClick={handleRemove}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 10.5L10.5 11.5 8 9 5.5 11.5 4.5 10.5 7 8 4.5 5.5 5.5 4.5 8 7l2.5-2.5 1 1L9 8l2.5 2.5z"/>
          </svg>
        </button>
      </div>
      <div className={styles.componentContent}>
        {renderPreview()}
      </div>
    </div>
  );
}