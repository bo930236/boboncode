import clsx from 'clsx';
import { CldVideoPlayer } from 'next-cloudinary';
import * as React from 'react';

import 'next-cloudinary/dist/cld-video-player.css';

type CloudinaryVideoType = {
  videoPublicId: string;
  projectPath: string;
  height: string | number;
  width: string | number;
  controls: boolean;
  className?: string;
  mdx?: boolean;
} & React.ComponentPropsWithoutRef<'video'>;

export default function CloudinaryVideo({
  videoPublicId,
  projectPath,
  height,
  width,
  className,
  mdx = false,
  style,
  ...rest
}: CloudinaryVideoType) {
  const RESIZE_MAX_WIDTH = 1000;
  const resizedToMaxWidth = mdx && +width >= RESIZE_MAX_WIDTH;

  return (
    <video
      className={clsx(className, {
        'mx-auto w-full': mdx && +width <= 800,
      })}
      style={{
        ...(mdx && +width <= 800 ? { maxWidth: width } : {}),
        ...style,
      }}
      {...rest}
    >
      <div className='absolute left-0 top-0'>
        <CldVideoPlayer
          id={videoPublicId}
          width={resizedToMaxWidth ? Math.min(+width, RESIZE_MAX_WIDTH) : width}
          height={
            resizedToMaxWidth ? (RESIZE_MAX_WIDTH * +height) / +width : height
          }
          controls={true}
          src={projectPath}
          transformation={{
            crop: 'fill',
            gravity: 'auto',
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
    </video>
  );
}
