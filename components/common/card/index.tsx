'use client';
import Image from 'next/image';
import React from 'react';
import { borderColors } from './constants';
import { CardProps, ColorType } from './types';
import { motion } from 'framer-motion';

const Card = ({ index, title, text, img, color }: CardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75 * (index + 1), type: 'spring' }}
      className={`border-t-4 p-[30px] shadow-card w-full max-h-[250px] lg:max-w-[350px] lg:h-1/2 lg:mt-0 ${
        index ? 'mt-[25px]' : ''
      } ${borderColors[color as ColorType]}`}
    >
      <h2 className='font-semibold text-xl'>{title}</h2>
      <p className='text-[13px] leading-[23px] mt-1 opacity-70'>{text}</p>
      <div className='w-full flex justify-end mt-10'>
        <Image src={img} alt='icon' height={64} width={64} sizes='100%' />
      </div>
    </motion.div>
  );
};

export default Card;
