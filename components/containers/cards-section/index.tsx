import Card from '@/components/common/card';
import React from 'react';
import { cards } from '@/app/api/response.json';

const CardsSection = () => {
  return (
    <section className='mt-[76px] lg:mt-16 lg:flex lg:h-full lg:gap-[30px]'>
      {cards.map((card, index) => {
        return card.length === 2 ? (
          <div
            key={index}
            className='lg:flex lg:flex-col lg:h-full lg:gap-[30px]'
          >
            <Card index={index} {...card[0]} />
            <Card index={index} {...card[1]} />
          </div>
        ) : (
          <div key={index} className='lg:flex lg:items-center lg:h-full'>
            <Card index={index} {...card[0]} />
          </div>
        );
      })}
    </section>
  );
};

export default CardsSection;
