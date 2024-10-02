/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#44A5FF',
                // primary: '#FFC83A',
            },
        },
    },
    plugins: [],
}