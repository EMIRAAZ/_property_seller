/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    fontFamily:{
      'sf-pro-bold':['sf-pro-display-bold', 'fantasy'],
      'sf-pro-medium':['sf-pro-display-medium', 'fantasy'],
      'sf-pro-regular':['sf-pro-display-regular', 'fantasy'],
      'poppins':['Poppins','fantasy']

    },
    colors:{
      'lavender-mist':'#F8F8E4',
      'rum-rwizzle':'#F8F8E4',
      'pattens-blue':'#E3F1FF',
      'frost':'#ECF6DF',
      'dawn-pink':'#F3EAE6',
      'harp':'#E6F3E6',
      'pure-black':'#000',
      'pure-white':'#fff'
    },
    borderRadius:{
      '20px':'20px',
      '10px':'10px',
    },
    fontSize:{
      '30px':'30px',
      '18px':'18px'
    }
  },
  
  plugins: [],
};
