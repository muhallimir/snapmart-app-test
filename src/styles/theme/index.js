import { createTheme } from '@mui/material';
import typography from './typography';
import palettes from './palettes';
import _var from './variables';

const Theme = createTheme({
    typography,
    palette: palettes,
    components: {
        MuiButton: {
            defaultProps: {
                disableRipple: true,
            },
            styleOverrides: {
                root: {
                    '&.Mui-disabled': {
                        backgroundColor: _var['--primary-ast-main'],
                        opacity: 0.2,
                        color: _var['--common-white'],
                    },
                },
            },
        },
        breakpoints: {
            values: {
                xs: 0,
                sm: 429,
                md: 900,
                lg: 1200,
                xl: 1440,
            },
        },
    },
});

export default Theme;
