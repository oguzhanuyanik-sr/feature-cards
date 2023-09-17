import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: { sm: '640px', md: '768px', lg: '1024px', xl: '1280px' },
    colors: {
      'red-100': '#EA5454',
      'torque-100': '#44D3D2',
      'orange-100': '##FCAE4A',
      'blue-100': '#549EF2',
      'dark-100': '#4D4F62',
    },
    fontFamily: {},
    boxShadow: {},
    backgroundImage: {},
    container: {
      center: true,
      padding: '2rem',
      screens: { sm: '640px', md: '768px', lg: '1024px', xl: '1280px' },
    },
  },

  plugins: [],
};
export default config;
