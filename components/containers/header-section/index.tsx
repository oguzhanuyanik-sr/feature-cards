'use client';
import React from 'react';
import { header } from '@/app/api/response.json';
import { motion } from 'framer-motion';

const HeaderSection = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
      className='text-center'
    >
      <h1 className='text-2xl lg:text-4xl font-extralight'>
        {header.title} <span className='font-semibold'>{header.boldTitle}</span>
      </h1>
      <p className='text-[15px] leading-[25px] mt-4 opacity-70'>
        {header.subTitle}
      </p>
    </motion.header>
  );
};

export default HeaderSection;
