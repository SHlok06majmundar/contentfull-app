import Image from 'next/image';
import { TwoColumnRowData } from '../../types/contentful';
import styles from './TwoColumnRow.module.css';

interface TwoColumnRowProps {
  data: TwoColumnRowData;
}

export function TwoColumnRow({ data }: TwoColumnRowProps) {
  return (
    <section className={styles.twoColumn}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.leftColumn}>
            <h2 className={styles.heading}>{data.leftHeading}</h2>
            <p className={styles.subtitle}>{data.leftSubtitle}</p>
            <a href={data.leftCtaUrl} className={styles.cta}>
              {data.leftCtaText}
            </a>
          </div>
          <div className={styles.rightColumn}>
            <div className={styles.imageWrapper}>
              <Image
                src={data.rightImage.url}
                alt={data.rightImage.description || data.rightImage.title}
                width={data.rightImage.width}
                height={data.rightImage.height}
                className={styles.image}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}