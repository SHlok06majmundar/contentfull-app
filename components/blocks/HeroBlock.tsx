import Image from 'next/image';
import { HeroBlockData } from '../../types/contentful';
import styles from './HeroBlock.module.css';

interface HeroBlockProps {
  data: HeroBlockData;
}

export function HeroBlock({ data }: HeroBlockProps) {
  return (
    <section className={styles.hero}>
      <div className={styles.background}>
        <Image
          src={data.backgroundImage.url}
          alt={data.backgroundImage.description || data.backgroundImage.title}
          fill
          priority
          className={styles.backgroundImage}
        />
        <div className={styles.overlay} />
      </div>
      <div className={styles.content}>
        <div className={styles.container}>
          <h1 className={styles.heading}>{data.heading}</h1>
          <p className={styles.subtitle}>{data.subtitle}</p>
          <a href={data.ctaUrl} className={styles.cta}>
            {data.ctaText}
          </a>
        </div>
      </div>
    </section>
  );
}