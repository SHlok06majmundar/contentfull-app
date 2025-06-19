'use client';

import { useDispatch } from 'react-redux';
import { addComponent } from '../../store/slices/layoutSlice';
import { ComponentConfig } from '../../types/contentful';
import styles from './ComponentPalette.module.css';

export function ComponentPalette() {
  const dispatch = useDispatch();

  const addHeroBlock = () => {
    const component: ComponentConfig = {
      id: `hero-${Date.now()}`,
      type: 'hero',
      data: {
        heading: 'New Hero Section',
        subtitle: 'Add your compelling subtitle here',
        ctaText: 'Call to Action',
        ctaUrl: '#',
        backgroundImage: {
          sys: { id: 'default' },
          title: 'Default Background',
          description: 'Default hero background',
          url: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=600&fit=crop',
          width: 1200,
          height: 600,
        },
      },
    };
    dispatch(addComponent(component));
  };

  const addTwoColumnRow = () => {
    const component: ComponentConfig = {
      id: `two-column-${Date.now()}`,
      type: 'twoColumn',
      data: {
        leftHeading: 'Feature Heading',
        leftSubtitle: 'Describe your amazing feature here with compelling details',
        leftCtaText: 'Learn More',
        leftCtaUrl: '#',
        rightImage: {
          sys: { id: 'default' },
          title: 'Feature Image',
          description: 'Feature illustration',
          url: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop',
          width: 600,
          height: 400,
        },
      },
    };
    dispatch(addComponent(component));
  };

  const addImageGrid = () => {
    const component: ComponentConfig = {
      id: `image-grid-${Date.now()}`,
      type: 'imageGrid',
      data: {
        images: [
          {
            sys: { id: 'grid-1' },
            title: 'Grid Image 1',
            description: 'First grid image',
            url: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=300&h=300&fit=crop',
            width: 300,
            height: 300,
          },
          {
            sys: { id: 'grid-2' },
            title: 'Grid Image 2',
            description: 'Second grid image',
            url: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=300&h=300&fit=crop',
            width: 300,
            height: 300,
          },
          {
            sys: { id: 'grid-3' },
            title: 'Grid Image 3',
            description: 'Third grid image',
            url: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=300&h=300&fit=crop',
            width: 300,
            height: 300,
          },
          {
            sys: { id: 'grid-4' },
            title: 'Grid Image 4',
            description: 'Fourth grid image',
            url: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=300&h=300&fit=crop',
            width: 300,
            height: 300,
          },
        ],
      },
    };
    dispatch(addComponent(component));
  };

  return (
    <div className={styles.palette}>
      <div className={styles.header}>
        <h2>Components</h2>
        <p>Drag to add components to your page</p>
      </div>

      <div className={styles.componentGrid}>
        <div className={styles.componentCard} onClick={addHeroBlock}>
          <div className={styles.preview}>
            <div className={styles.heroPreview}>
              <div className={styles.heroContent}>
                <div className={styles.heroTitle}></div>
                <div className={styles.heroSubtitle}></div>
                <div className={styles.heroButton}></div>
              </div>
            </div>
          </div>
          <div className={styles.componentInfo}>
            <h3>Hero Block</h3>
            <p>Full-width hero section with heading, subtitle, and CTA</p>
          </div>
        </div>

        <div className={styles.componentCard} onClick={addTwoColumnRow}>
          <div className={styles.preview}>
            <div className={styles.twoColumnPreview}>
              <div className={styles.columnLeft}>
                <div className={styles.columnTitle}></div>
                <div className={styles.columnText}></div>
                <div className={styles.columnButton}></div>
              </div>
              <div className={styles.columnRight}></div>
            </div>
          </div>
          <div className={styles.componentInfo}>
            <h3>Two Column Row</h3>
            <p>Content on left, image on right layout</p>
          </div>
        </div>

        <div className={styles.componentCard} onClick={addImageGrid}>
          <div className={styles.preview}>
            <div className={styles.gridPreview}>
              <div className={styles.gridItem}></div>
              <div className={styles.gridItem}></div>
              <div className={styles.gridItem}></div>
              <div className={styles.gridItem}></div>
            </div>
          </div>
          <div className={styles.componentInfo}>
            <h3>Image Grid</h3>
            <p>2x2 grid of optimized images</p>
          </div>
        </div>
      </div>
    </div>
  );
}