import Image from 'next/image';
import { ImageGridData } from '../../types/contentful';
import styles from './ImageGrid.module.css';

interface ImageGridProps {
  data: ImageGridData;
}

export function ImageGrid({ data }: ImageGridProps) {
  return (
    <section className={styles.imageGrid}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {data.images.slice(0, 4).map((image, index) => (
            <div key={image.sys.id} className={styles.gridItem}>
              <div className={styles.imageWrapper}>
                <Image
                  src={image.url}
                  alt={image.description || image.title}
                  width={image.width}
                  height={image.height}
                  className={styles.image}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}