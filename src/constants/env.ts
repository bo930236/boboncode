import { getFromLocalStorage } from '@/lib/helper.client';

export const isProd = true;

/**
 * Show command service on contents
 * @see Comment.tsx
 */
export const commentFlag =
  isProd || process.env.NEXT_PUBLIC_FLAG_COMMENT === 'true';
/**
 * Get content meta from the database
 * @see useContentMeta.tsx
 */
export const contentMetaFlag =
  isProd || process.env.NEXT_PUBLIC_FLAG_CONTENT_META === 'true';
/**
 * Increment content views
 * @see useContentMeta.tsx
 */
export const incrementMetaFlag =
  isProd && getFromLocalStorage('incrementMetaFlag') !== 'false';
/**
 * Open API access to newsletter provider (subscribe and view count)
 * @see SubscribeCard.tsx
 */
export const newsletterFlag =
  isProd || process.env.NEXT_PUBLIC_FLAG_NEWSLETTER === 'true';

/**
 * Console to the browser greeting message
 * @see Footer.tsx
 */
export const feedbackFlag =
  isProd || process.env.NEXT_PUBLIC_FLAG_FEEDBACK === 'true';

/**
 * Only increase count when in specified domain meta
 * @see _app.tsx
 */
export const blockDomainMeta =
  isProd || process.env.NEXT_PUBLIC_META_BLOCK_DOMAIN === 'true';
