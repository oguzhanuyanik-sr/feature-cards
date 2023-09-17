import Link from 'next/link';
import React from 'react';

type Props = {};

export const metadata: Metadata = {
  title: '404 | Page not found! ',
  description: 'Oops... Something went wrong.',
};

const NotFound = (props: Props) => {
  return (
    <div
      style={{
        background: '#007aff',
        minHeight: '100vh',
        width: '100vw',
        color: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <h1
          style={{
            textAlign: 'center',
            fontSize: '12rem',
            lineHeight: '1',
          }}
        >
          404
        </h1>
        <p
          style={{
            textAlign: 'center',
            color: '#ffffff',
            fontSize: '1.5rem',
            lineHeight: '2',
          }}
        >
          Page not found!
        </p>
      </div>
      <Link
        style={{
          fontWeight: '700',
          color: '#ffffff',
          padding: '14px 20px',
          borderRadius: '10px',
          fontSize: '1rem',
          lineHeight: '2',
          border: '1px solid #ffffff',
        }}
        href='/'
      >
        Go back to the homepage
      </Link>
    </div>
  );
};

export default NotFound;
