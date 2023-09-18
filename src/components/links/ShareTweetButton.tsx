import clsx from 'clsx';
import * as React from 'react';
import { SiTwitter } from 'react-icons/si';

import ButtonLink, { ButtonLinkProps } from '@/components/links/ButtonLink';

type ShareTweetButtonProps = {
  url: string;
  title: string;
} & Omit<ButtonLinkProps, 'children' | 'href'>;

export default function ShareTweetButton({
  url,
  title,
  className,
  ...rest
}: ShareTweetButtonProps) {
<<<<<<< HEAD
  const text = `I just read an article about ${title} by @bobotsai.`;
=======
  const text = `I just read an article about ${title} by @bobotsai_.`;
>>>>>>> d3357274b544633a59fe68d4d2f72fad93ae09bb
  const intentUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
    url
  )}&text=${encodeURIComponent(text)}%0A%0A`;

  return (
    <ButtonLink
      {...rest}
      href={intentUrl}
      className={clsx('items-center gap-2', className)}
    >
      <SiTwitter className='text-[1.2em] text-[#1da1f2]' />
      Tweet this article
    </ButtonLink>
  );
}
