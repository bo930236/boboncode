import clsx from 'clsx';
import { CldVideoPlayer } from 'next-cloudinary';
import * as React from 'react';

type CloudinaryVideoType = {
  videoPublicId: string;
  projectPath: string;
  height: string | number;
  width: string | number;
  alt: string;
  title?: string;
  className?: string;
  preview?: boolean;
  noStyle?: boolean;
  aspect?: {
    width: number;
    height: number;
  };
  mdx?: boolean;
} & React.ComponentPropsWithoutRef<'figure'>;

export default function CloudinaryVideo({
  videoPublicId,
  projectPath,
  height,
  width,
  className,
  preview = true,
  noStyle = false,
  mdx = false,
  style,
  aspect,
  ...rest
}: CloudinaryVideoType) {
  const aspectRatio = aspect ? aspect.height / aspect.width : undefined;

  const RESIZE_MAX_WIDTH = 1000;
  const resizedToMaxWidth = mdx && +width >= RESIZE_MAX_WIDTH;

  return (
    <figure
      className={clsx(className, {
        'overflow-hidden rounded shadow dark:shadow-none': !noStyle,
        'mx-auto w-full': mdx && +width <= 800,
      })}
      style={{
        ...(mdx && +width <= 800 ? { maxWidth: width } : {}),
        ...style,
      }}
      {...rest}
    >
      <div
        style={{
          position: 'relative',
          height: 0,
          paddingTop: aspectRatio
            ? `${aspectRatio * 100}%`
            : `${(+height / +width) * 100}%`,
          cursor: preview ? 'zoom-in' : 'default',
        }}
      >
        <div className='absolute left-0 top-0'>
          <CldVideoPlayer
            id={videoPublicId}
            width={
              resizedToMaxWidth ? Math.min(+width, RESIZE_MAX_WIDTH) : width
            }
            height={
              resizedToMaxWidth ? (RESIZE_MAX_WIDTH * +height) / +width : height
            }
            src={projectPath}
            transformation={{
              crop: 'fill',
              gravity: 'center',
              width: resizedToMaxWidth
                ? Math.min(+width, RESIZE_MAX_WIDTH)
                : width,
              height: resizedToMaxWidth
                ? (RESIZE_MAX_WIDTH * +height) / +width
                : height,
            }}
          />
          ;
        </div>
      </div>
    </figure>
  );
}
