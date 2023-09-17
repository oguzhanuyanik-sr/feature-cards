import React from 'react';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return <main className='container my-[85px]'>{children}</main>;
};

export default MainLayout;
