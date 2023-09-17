import CardsSection from '@/components/containers/cards-section';
import HeaderSection from '@/components/containers/header-section';
import MainLayout from '@/components/layouts/main-layout';
import React from 'react';

const Home = () => {
  return (
    <MainLayout>
      <HeaderSection />
      <CardsSection />
    </MainLayout>
  );
};

export default Home;
