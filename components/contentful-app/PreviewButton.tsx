'use client';

import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import styles from './PreviewButton.module.css';

interface PreviewButtonProps {
  pageSlug?: string;
}

export function PreviewButton({ pageSlug = 'preview' }: PreviewButtonProps) {
  const { components } = useSelector((state: RootState) => state.layout);

  const handlePreview = () => {
    const previewUrl = `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/landing/${pageSlug}`;
    window.open(previewUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <button
      onClick={handlePreview}
      className={styles.previewButton}
      disabled={components.length === 0}
      title="Preview page in new tab"
    >
      <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
        <polyline points="15,3 21,3 21,9" />
        <line x1="10" y1="14" x2="21" y2="3" />
      </svg>
      Preview
    </button>
  );
}