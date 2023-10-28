import clsx from 'clsx';

import UnstyledLink, { UnstyledLinkProps } from './UnstyledLink';

export type ButtonLinkProps = UnstyledLinkProps;

export default function ButtonLink({
  children,
  className = '',
  ...rest
}: ButtonLinkProps) {
  return (
    <UnstyledLink
      {...rest}
      className={clsx(
        'inline-flex rounded px-4 py-2 font-bold',
        'focus:outline-none focus-visible:ring focus-visible:ring-primary-300',
        'scale-100 hover:scale-[1.05] active:scale-[0.95] motion-safe:transform-gpu',
        'transition duration-100',
        'bg-gradient-to-r from-primary-300 to-primary-400 font-bold text-white shadow-md shadow-gray-400 dark:text-neutral-800',
        className
      )}
    >
      {children}
    </UnstyledLink>
  );
}
