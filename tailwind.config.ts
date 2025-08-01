module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  safelist: [
    'w-[22.5rem]',
    'h-[27.5rem]',
    'md:w-[24rem]',
    'md:h-[28.75rem]',
    'lg:w-[25rem]',
    'lg:h-[30rem]'
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter'],
        montserrat: ['Montserrat', 'sans-serif'],
        publicSans: ['Public Sans', 'sans-serif'],
        plusJakartaSans: ['Plus Jakarta Sans', 'sans-serif'],
      },
    },
  },
};
