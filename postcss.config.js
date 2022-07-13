const tailwindcss = require('tailwindcss');
module.exports = {
    plugins: [
        tailwindcss('./tailwind.js'),
        require('autoprefixer')
    ],
    theme: {
        colors: {
            "primary": "#849C5D",
            "secondary": "#D4B865",
            "dark": {
                100: "#040505",
                200: "#192222",

            },
            "white": "#fff",
        },
    },
};