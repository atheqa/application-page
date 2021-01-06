import { createGlobalStyle } from 'styled-components';
import { fonts } from './constants';

const GlobalStyle = createGlobalStyle`
    /* barlow-regular - latin */
    @font-face {
        font-family: 'Barlow';
        font-style: normal;
        font-weight: 400;
        src: url('/fonts/barlow-v5-latin-regular.eot'); /* IE9 Compat Modes */
        src: local('Barlow Regular'), local('Barlow-Regular'),
            url('/fonts/barlow-v5-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
            url('/fonts/barlow-v5-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
            url('/fonts/barlow-v5-latin-regular.woff') format('woff'), /* Modern Browsers */
            url('/fonts/barlow-v5-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
            url('/fonts/barlow-v5-latin-regular.svg#Barlow') format('svg'); /* Legacy iOS */
    }
    /* barlow-500 - latin */
    @font-face {
        font-family: 'Barlow';
        font-style: normal;
        font-weight: 500;
        src: url('/fonts/barlow-v5-latin-500.eot'); /* IE9 Compat Modes */
        src: local('Barlow Medium'), local('Barlow-Medium'),
            url('/fonts/barlow-v5-latin-500.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
            url('/fonts/barlow-v5-latin-500.woff2') format('woff2'), /* Super Modern Browsers */
            url('/fonts/barlow-v5-latin-500.woff') format('woff'), /* Modern Browsers */
            url('/fonts/barlow-v5-latin-500.ttf') format('truetype'), /* Safari, Android, iOS */
            url('/fonts/barlow-v5-latin-500.svg#Barlow') format('svg'); /* Legacy iOS */
    }

    /* alegreya-sans-italic - latin */
    @font-face {
        font-family: 'Alegreya Sans';
        font-style: italic;
        font-weight: 400;
        src: url('/fonts/alegreya-sans-v12-latin-italic.eot'); /* IE9 Compat Modes */
        src: local('Alegreya Sans Italic'), local('AlegreyaSans-Italic'),
            url('/fonts/alegreya-sans-v12-latin-italic.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
            url('/fonts/alegreya-sans-v12-latin-italic.woff2') format('woff2'), /* Super Modern Browsers */
            url('/fonts/alegreya-sans-v12-latin-italic.woff') format('woff'), /* Modern Browsers */
            url('/fonts/alegreya-sans-v12-latin-italic.ttf') format('truetype'), /* Safari, Android, iOS */
            url('/fonts/alegreya-sans-v12-latin-italic.svg#AlegreyaSans') format('svg'); /* Legacy iOS */
    }
    /* alegreya-sans-regular - latin */
    @font-face {
        font-family: 'Alegreya Sans';
        font-style: normal;
        font-weight: 400;
        src: url('/fonts/alegreya-sans-v12-latin-regular.eot'); /* IE9 Compat Modes */
        src: local('Alegreya Sans Regular'), local('AlegreyaSans-Regular'),
            url('/fonts/alegreya-sans-v12-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
            url('/fonts/alegreya-sans-v12-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
            url('/fonts/alegreya-sans-v12-latin-regular.woff') format('woff'), /* Modern Browsers */
            url('/fonts/alegreya-sans-v12-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
            url('/fonts/alegreya-sans-v12-latin-regular.svg#AlegreyaSans') format('svg'); /* Legacy iOS */
    }
    /* alegreya-sans-700 - latin */
    @font-face {
        font-family: 'Alegreya Sans';
        font-style: normal;
        font-weight: 700;
        src: url('/fonts/alegreya-sans-v12-latin-700.eot'); /* IE9 Compat Modes */
        src: local('Alegreya Sans Bold'), local('AlegreyaSans-Bold'),
            url('/fonts/alegreya-sans-v12-latin-700.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
            url('/fonts/alegreya-sans-v12-latin-700.woff2') format('woff2'), /* Super Modern Browsers */
            url('/fonts/alegreya-sans-v12-latin-700.woff') format('woff'), /* Modern Browsers */
            url('/fonts/alegreya-sans-v12-latin-700.ttf') format('truetype'), /* Safari, Android, iOS */
            url('/fonts/alegreya-sans-v12-latin-700.svg#AlegreyaSans') format('svg'); /* Legacy iOS */
    }
    /* alegreya-sans-700italic - latin */
    @font-face {
        font-family: 'Alegreya Sans';
        font-style: italic;
        font-weight: 700;
        src: url('/fonts/alegreya-sans-v12-latin-700italic.eot'); /* IE9 Compat Modes */
        src: local('Alegreya Sans Bold Italic'), local('AlegreyaSans-BoldItalic'),
            url('/fonts/alegreya-sans-v12-latin-700italic.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
            url('/fonts/alegreya-sans-v12-latin-700italic.woff2') format('woff2'), /* Super Modern Browsers */
            url('/fonts/alegreya-sans-v12-latin-700italic.woff') format('woff'), /* Modern Browsers */
            url('/fonts/alegreya-sans-v12-latin-700italic.ttf') format('truetype'), /* Safari, Android, iOS */
            url('/fonts/alegreya-sans-v12-latin-700italic.svg#AlegreyaSans') format('svg'); /* Legacy iOS */
    }

    /* global stylesheets */

    html {
        box-sizing: border-box;
        font-size: 16px !important;
    }

    *, *:before, *:after {
        box-sizing: inherit;
        margin: 0;
        padding: 0;
    }

    body {
        font-family: ${fonts.primary}, Arial, Georgia, Serif;
    }

    textarea, input, button {
        font-family: ${fonts.primary}, Arial, Georgia, Serif;
    }

    textarea:focus, input:focus, button {
        outline: none;
    }

    a {
        color: #259DFF;
        text-decoration: none;
    }

    h1 {
        font-family: ${fonts.headers}, Arial, Georgia, Serif;
    }
`;

export default GlobalStyle;
