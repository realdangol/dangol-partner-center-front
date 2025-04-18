/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}', // App Router 구조
    './components/**/*.{js,ts,jsx,tsx,mdx}', // 공용 컴포넌트 폴더
    './.storybook/**/*.{js,ts,jsx,tsx}', // Storybook 폴더
  ],
  theme: {
    extend: {
      colors: {
        white: '#ffffff',
        brand: {
          100: '#FCEFEA',
          200: '#F9E0D5',
          300: '#F4CCBA',
          400: '#F2BFA9',
          500: '#EDA587',
          600: '#E78B64',
          700: '#E27242',
        },
        neutral: {
          100: '#F4F4F4',
          200: '#E3E3E3',
          300: '#D1D1D1',
          400: '#B0B0B0',
          500: '#8E8E8E',
          600: '#686868',
          700: '#4E4E4E',
          800: '#1D1E1E',
        },
        error: {
          100: '#FEDDD8',
          200: '#FDBAB1',
          300: '#FC988A',
          400: '#FB7563',
          500: '#FA533C',
          600: '#F83015',
        },
        success: {
          100: '#F1F9EE',
          200: '#E3F3E1',
          300: '#C4E8C6',
          400: '#A3DCAA',
          500: '#82CE8F',
          600: '#59C173',
        },
      },
      fontSize: {
        h: ['1.5rem', '1.5rem'], // 24px/24px
        h1: ['1.25rem', '1.5rem'], // 20px/24px
        h2: ['1.125rem', '1.375rem'], // 18px/22px
        body1: ['1rem', '1.25rem'], // 16px/20px
        body2: ['0.9375rem', '1.125rem'], // 15px/18px
        body3: ['0.875rem', '1rem'], // 14px/16px
        label: ['0.8125rem', '0.9375rem'], // 13px/15px
        element1: ['1rem', '1.125rem'], // 16px/18px
        element2: ['0.875rem', '1rem'], // 14px/16px
        element3: ['0.8125rem', '0.9375rem'], // 13px/15px
      },
      fontWeight: {
        regular: '400',
      },
      letterSpacing: {
        normal: '0em', // 0px
        'tight-custom-1': '-0.00625em', // -0.1px
        'tight-custom-2': '-0.0125em', // -0.2px
      },
      fontFamily: {
        sans: ['Pretendard'],
      },
    },
  },
  plugins: [],
};
