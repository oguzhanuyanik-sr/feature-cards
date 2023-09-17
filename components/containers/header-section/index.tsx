import React from 'react';
import { header } from '@/app/api/response.json';

type Props = {};

const HeaderSection = (props: Props) => {
  return (
    <header className='text-center'>
      <h1 className='text-2xl lg:text-4xl font-extralight'>
        {header.title} <span className='font-semibold'>{header.boldTitle}</span>
      </h1>
      <p className='text-[15px] leading-[25px] mt-4 opacity-70'>
        {header.subTitle}
      </p>
    </header>
  );
};

export default HeaderSection;
