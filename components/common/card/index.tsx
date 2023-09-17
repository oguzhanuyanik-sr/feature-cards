import Image from 'next/image';
import React from 'react';

type Props = {};

const borderColors = {
  torque: 'border-torque-100',
  red: 'border-red-100',
  orange: 'border-orange-100',
  blue: 'border-blue-100',
};

const Card = ({ index, title, text, img, color }: Props) => {
  return (
    <div
      className={`border-t-4 p-[30px] shadow-card w-full lg:max-w-[350px] lg:h-1/2 lg:mt-0 ${
        index ? 'mt-[25px]' : ''
      } ${borderColors[color]}`}
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
