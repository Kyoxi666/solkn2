/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'solkn-dark': '#222f30',
                'solkn-gray': '#e7e8e1',
                'solkn-sage': '#c9cbbe',
                'solkn-lime': '#cef79e',
                'solkn-green-deep': '#1A332A',
                'solkn-green-light': '#4A7A6A',
                'solkn-white': '#f7f7f5',
                'solkn-text': '#222f30',
            },
            fontFamily: {
                sans: ['Manrope', 'sans-serif'],
            },
            animation: {
                'marquee': 'marquee 25s linear infinite',
                'fade-in': 'fadeIn 1s ease-out forwards',
                'mesh': 'mesh 20s ease infinite',
            },
            keyframes: {
                marquee: {
                    '0%': { transform: 'translateX(0%)' },
                    '100%': { transform: 'translateX(-100%)' },
                },
                fadeIn: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                mesh: {
                    '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
                    '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
                    '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
                }
            }
        },
    },
    plugins: [],
}
