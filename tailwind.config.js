/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [  //In the content we need to tell our project that what files are using the tailwind class.
     "./src/**/*.{html,js}", //these are the files using tailwind css.
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  
}
