/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-purple': '#A05AFF',
        'primary-teal': '#1BCFB4',
        'support-blue': '#4BCBEB',
        'support-salmon': '#FE9496',
        'support-purple': '#9E58FF',
        'bg-light': '#F2F2F9',
        'text-muted': '#A3A3A3',
      },
      backgroundImage: {
        'gradient-purple': 'linear-gradient(to right, #da8cff, #9a55ff)',
        'gradient-blue': 'linear-gradient(to right, #90caf9, #047edf 99%)',
        'gradient-teal': 'linear-gradient(to right, #84d9d2, #07cdae)',
      },
    },
  },
  plugins: [],
}
