/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                // primary: '#446ede',
                primary: '#5389FF',
                // primary: '#FFC83A',
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}