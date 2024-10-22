import defaultTheme from 'tailwindcss/defaultTheme';
/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: [
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#5389FF',

                // // ? Light Theme
                // // light: '#F9FAFB',
                // light: '#dcdcdc',
                // lightText: '#1F2937',
                
                // // ? Dark Theme
                // dark: '#1F2937',
                // darkText: '#F9FAFB',
                // // dark: '#171713',

                dark: '#2D2D2D', // Replace with your dark color code
                darkText: '#E5E5E5', // Replace with your dark text color code
                light: '#FFFFFF', // Replace with your light color code
                lightText: '#333333', // Replace with your light text color code
            },
            fontFamily: {
                sans: ["Inter var", ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [require("@tailwindcss/typography")],
};
