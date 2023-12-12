import { createTheme } from '@mui/material';
import typography from './typography';
import palettes from './palettes';
import _var from './variables';

// ? Default breakpoints
//* xl, extra-large: 1536px ↗️
//* lg, large: 1200px ↗️
//* md, medium: 900px ↗️
//* sm, small: 600px ↗️
//* xs, extra-small: 0px ↗️

const theme = createTheme();

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
        MuiDialog: {
            defaultProps: {
                PaperProps: { sx: { borderRadius: ['8px', '20px'], maxHeight: '-webkit-max-content' } },
            },
        },
        MuiToggleButton: {
            defaultProps: {
                disableRipple: true,
            },
        },
        MuiDialogActions: {
            defaultProps: {
                disableSpacing: true,
            },
            styleOverrides: {
                root: { padding: '0px', paddingBottom: 16 },
            },
        },
        MuiDialogTitle: {
            styleOverrides: {
                root: { padding: '0px' },
            },
        },
        MuiLink: {
            defaultProps: {
                underline: 'none',
                color: 'inherit',
            },
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    '& .MuiOutlinedInput-notchedOutline': { borderColor: _var['--grey-50'] },
                },
            },
        },
        MuiTooltip: {
            styleOverrides: {
                tooltip: {
                    background: 'grey.400',
                    borderRadius: '100px',
                    padding: '6px',
                    minWidth: '125px',
                    textAlign: 'center',
                },
                arrow: {
                    color: 'grey.400',
                },
            },
        },
        MuiSlider: {
            styleOverrides: {
                root: {},
            },
        },
        MuiBackdrop: {
            defaultProps: {
                'data-testid': 'backdrop',
            },
        },
        MuiCheckbox: {
            defaultProps: {
                inputProps: {
                    'data-testid': 'checkbox',
                },
            },
        },
        MuiAccordion: {
            styleOverrides: {
                root: {
                    '& .MuiAccordionSummary-content': { margin: '0px' },
                },
            },
        },
        MuiContainer: {
            defaultProps: {
                maxWidth: 'lg',
                disableGutters: true,
            },
            styleOverrides: {
                root: {
                    [theme.breakpoints.down('lg')]: {
                        padding: '0px 24px',
                    },
                },
            },
        },
        MuiFormControlLabel: {
            styleOverrides: {
                root: {
                    marginLeft: '0px',
                    alignItems: 'flex-start',
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
