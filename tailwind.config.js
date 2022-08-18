const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './vendor/laravel/jetstream/**/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
    ],

    theme: {
        extend: {
            fontFamily: {
                weird: ['Rajdhani', 'sans-serif'],
            },
            colors: {
                'flamingo': {
                    DEFAULT: '#EF6136',
                    '50': '#FDE7E0',
                    '100': '#FBD8CD',
                    '200': '#F8BAA7',
                    '300': '#F59C82',
                    '400': '#F27F5C',
                    '500': '#EF6136',
                    '600': '#DB4011',
                    '700': '#A7310D',
                    '800': '#742209',
                    '900': '#401305'
                },

                'woodland': {
                    DEFAULT: '#2E6E4D',
                    '50': '#87CDA9',
                    '100': '#78C79E',
                    '200': '#5CBB8A',
                    '300': '#46A875',
                    '400': '#3A8B61',
                    '500': '#2E6E4D',
                    '600': '#1D4631',
                    '700': '#0D1F16',
                    '800': '#000000',
                    '900': '#000000'
                },

                'background': {
                    DEFAULT: '#F2E9DC',
                    '50': '#FFFFFF',
                    '100': '#FFFFFF',
                    '200': '#FFFFFF',
                    '300': '#FFFFFF',
                    '400': '#FDFCFA',
                    '500': '#F2E9DC',
                    '600': '#E3CFB3',
                    '700': '#D4B68A',
                    '800': '#C49C61',
                    '900': '#AD8140'
                },
            }
        },
    },

    plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
