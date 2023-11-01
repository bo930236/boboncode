import Image from 'next/image';
import { RoughNotation } from 'react-rough-notation';

import GithubCard from '@/components/content/card/GithubCard';
import { Pre } from '@/components/content/Pre';
import SplitImage, { Split } from '@/components/content/SplitImage';
import TweetCard from '@/components/content/TweetCard';
import CloudinaryImg from '@/components/images/CloudinaryImg';
import CustomLink from '@/components/links/CustomLink';
import TechIcons from '@/components/TechIcons';

import CloudinaryVideo from '../images/CloudinaryVideo';

const MDXComponents = {
  a: CustomLink,
  Image,
  pre: Pre,
  // code: CustomCode,
  CloudinaryImg,
  CloudinaryVideo,
  SplitImage,
  Split,
  TechIcons,
  TweetCard,
  GithubCard,
  RoughNotation,
};

export default MDXComponents;
