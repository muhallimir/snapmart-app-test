import _var from './variables';

const lightPalette = {
    mode: 'light',
    common: {
        black: _var['--common-black'],
        white: _var['--common-white'],
    },
    primary: {
        light: _var['--primary-ast-light'],
        main: _var['--primary-ast-main'],
        dark: _var['--primary-ast-dark'],
    },
    error: {
        light: _var['--error-light'],
        main: _var['--error-main'],
        dark: _var['--error-dark'],
    },
    warning: {
        light: _var['--warning-light'],
        main: _var['--warning-main'],
        secondary: _var['--warning-main'],
        dark: _var['--warning-dark'],
    },
    success: {
        light: _var['--success-light'],
        main: _var['--success-main'],
        dark: _var['--success-dark'],
    },
    grey: {
        50: _var['--grey-50'],
        100: _var['--grey-100'],
        200: _var['--grey-200'],
        300: _var['--grey-300'],
        400: _var['--grey-400'],
        500: _var['--grey-500'],
        600: _var['--grey-600'],
        graphaxes: _var['--grey-graph-axes'],
        graphaxes2: _var['--grey-graph-axes2'],
    },
    light_grey: {
        50: _var['--light-grey-50'],
        100: _var['--light-grey-100'],
        150: _var['--grey-150'],
        350: _var['--grey-350'],
    },
    green: {
        light: _var['--light-green'],
    },
};

export default lightPalette;
