
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: 'var(--color-bg)',
        header: 'var(--color-header)',
        border: 'var(--color-border)',
        text: 'var(--color-text)',
        inputText: 'var(--color-input-text)',
        btnText: 'var(--color-btn-text)',
      },
    },
  },
  // asegúrate de tener content configurado para incluir tus archivos
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],

    // screens: {
    //   'mobil': '390px',
    //   'sm': '640px',
    //   'md': '768px',
    //   'lg': '1024px',
    
      
    // },
  // },
  // plugins: [],
}