/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width :{
        widthK : '600px',
        modalW: '300px'
      },
      height : {
        modalH : '500px',
        checkHmodal : '200px',
        nameHmodal : '300px'
       
      },

      colors : {
        loginC : '#0A3055',
        buttonC : '#FF6666',
        AdminBackC : '#0A3055',
        ActiveC : '#00FF19',
        tableDataC : '#1A1C1F'
       
      },
      flex : {
        '2' : '2 2 0%',
        '6' : '6 6 0%'
      },
     

    },
  },
  plugins: [],
}