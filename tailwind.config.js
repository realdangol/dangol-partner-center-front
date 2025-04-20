/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}', // App Router 구조
    './components/**/*.{js,ts,jsx,tsx,mdx}', // 공용 컴포넌트 폴더
  ],
  theme: {
    extend: {
      // 여기에 커스텀 색상 팔레트를 추가합니다.
      colors: {
        // --- Basic ---
        white: '#ffffff', // 필요하다면 주석 해제

        // --- Brand & Secondary Color ---
        brand: {
          100: '#FCEFEA', // --color-brand-100
          200: '#F9E0D5', // --color-brand-200
          300: '#F4CCBA', // --color-brand-300
          400: '#F2BFA9', // --color-brand-400
          500: '#EDA587', // --color-brand-500
          600: '#E78B64', // --color-brand-600
          700: '#E27242', // --color-brand-700
        },

        // --- Neutral Color ---
        neutral: {
          100: '#F4F4F4', // --color-neutral-100
          200: '#E3E3E3', // --color-neutral-200
          300: '#D1D1D1', // --color-neutral-300
          400: '#B0B0B0', // --color-neutral-400
          500: '#8E8E8E', // --color-neutral-500
          600: '#686868', // --color-neutral-600  (제공된 코드 기준)
          700: '#4E4E4E', // --color-neutral-700
          800: '#1D1E1E', // --color-neutral-800
        },

        // --- Semantic Color ---
        error: {
          100: '#FEDDD8', // --color-error-100 (제공된 코드 기준)
          200: '#FDBAB1', // --color-error-200
          300: '#FC988A', // --color-error-300
          400: '#FB7563', // --color-error-400
          500: '#FA533C', // --color-error-500
          600: '#F83015', // --color-error-600
        },

        success: {
          100: '#F1F9EE', // --color-success-100
          200: '#E3F3E1', // --color-success-200
          300: '#C4E8C6', // --color-success-300
          400: '#A3DCAA', // --color-success-400
          500: '#82CE8F', // --color-success-500
          600: '#59C173', // --color-success-600
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
        medium: '500',
        semibold: '600',
        bold: '700',
      },
      letterSpacing: {
        normal: '0em', // 0px
        'tight-custom-1': '-0.00625em', // -0.1px
        'tight-custom-2': '-0.0125em', // -0.2px
      },
      fontFamily: {
        sans: ['var(--font-pretendard)'],
      },
    },
  },
  plugins: [],
};
