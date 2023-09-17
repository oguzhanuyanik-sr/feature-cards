import Image from 'next/image';
import React from 'react';
import { borderColors } from './constants';
import { CardProps, ColorType } from './types';

const Card = ({ index, title, text, img, color }: CardProps) => {
  return (
    <div
      className={`border-t-4 p-[30px] shadow-card w-full lg:max-w-[350px] lg:h-1/2 lg:mt-0 ${
        index ? 'mt-[25px]' : ''
      } ${borderColors[color as ColorType]}`}
    >
      <h2 className='font-semibold text-xl'>{title}</h2>
      <p className='text-[13px] leading-[23px] mt-1 opacity-70'>{text}</p>
      <div className='w-full flex justify-end mt-10'>
        <Image src={img} alt='icon' height={64} width={64} sizes='100%' />
      </div>
    </div>
  );
};

export default Card;
