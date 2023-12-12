import { createTheme } from '@mui/material';

const theme = createTheme();

const typography = {
    fontFamily: ['Gruffy Soft', 'sans-serif'].join(','),

    /* -------------------------------- variants -------------------------------- */

    h1: {
        fontWeight: 800,
        fontSize: '2.441rem',
        lineHeight: '42.72px',
        [theme.breakpoints.up('sm')]: {
            fontSize: '3.052rem',
            lineHeight: '67.5px',
        },
    },
    h2: {
        fontWeight: 700,
        fontSize: '1.953rem',
        lineHeight: '34.2px',
        [theme.breakpoints.up('sm')]: {
            fontSize: '2.441rem',
            lineHeight: '54.94px',
        },
    },
    h3: {
        fontWeight: 700,
        fontSize: '1.563rem',
        lineHeight: '27.4px',
        [theme.breakpoints.up('sm')]: {
            fontSize: '1.953rem',
            lineHeight: '43.95px',
        },
    },
    'h3-extrabold': {
        fontWeight: 800,
        fontSize: '1.563rem',
        lineHeight: '27.4px',
        [theme.breakpoints.up('sm')]: {
            fontSize: '1.953rem',
            lineHeight: '43.95px',
        },
    },
    'h3-reg': {
        fontWeight: 400,
        fontSize: '1.563rem',
        lineHeight: '17.5px',
        [theme.breakpoints.up('sm')]: {
            fontSize: '1.953rem',
            lineHeight: '28.13px',
        },
    },
    h4: {
        fontWeight: 700,
        fontSize: '1.25rem',
        lineHeight: '21.88px',
        [theme.breakpoints.up('sm')]: {
            fontSize: '1.563rem',
            lineHeight: '40px',
        },
    },
    'h4-reg': {
        fontWeight: 400,
        fontSize: '1.25rem',
        lineHeight: '21.88px',
        [theme.breakpoints.up('sm')]: {
            fontSize: '1.563rem',
            lineHeight: '40px',
        },
    },
    h5: {
        fontWeight: 700,
        fontSize: '1rem',
        lineHeight: '17.5px',
        [theme.breakpoints.up('sm')]: {
            fontSize: '1.25rem',
            lineHeight: '28.13px',
        },
    },
    'h5-allcaps': {
        fontWeight: 700,
        fontSize: '1rem',
        lineHeight: '17.5px',
        textTransform: 'uppercase',
        [theme.breakpoints.up('sm')]: {
            fontSize: '1.25rem',
            lineHeight: '28.13px',
        },
    },
    'h5-titlecase': {
        fontWeight: 400,
        fontSize: '1rem',
        lineHeight: '17.5px',
        textTransform: 'capitalize',
        [theme.breakpoints.up('sm')]: {
            fontSize: '1.25rem',
            lineHeight: '28.13px',
        },
    },
    'h5-reg': {
        fontWeight: 400,
        fontSize: '1rem',
        lineHeight: '17.5px',
        [theme.breakpoints.up('sm')]: {
            fontSize: '1.25rem',
            lineHeight: '28.13px',
        },
    },
    h6: {
        fontWeight: 500,
        fontSize: '0.8rem',
        lineHeight: '14px',
        [theme.breakpoints.up('sm')]: {
            fontSize: '1rem',
            lineHeight: '22.5px',
        },
    },
    'h6-allcaps': {
        fontWeight: 500,
        fontSize: '0.8rem',
        lineHeight: '14px',
        textTransform: 'uppercase',
        [theme.breakpoints.up('sm')]: {
            fontSize: '1rem',
            lineHeight: '22.5px',
        },
    },
    body1: {
        fontWeight: 400,
        fontSize: '1rem',
        lineHeight: '17.5px',
        [theme.breakpoints.up('sm')]: {
            lineHeight: '22.5px',
        },
    },
    'body1-titlecase': {
        fontWeight: 400,
        fontSize: '1rem',
        lineHeight: '17.5px',
        textTransform: 'capitalize',
        [theme.breakpoints.up('sm')]: {
            lineHeight: '22.5px',
        },
    },
    body2: {
        fontWeight: 400,
        fontSize: '0.8rem',
        lineHeight: '14px',
        [theme.breakpoints.up('sm')]: {
            lineHeight: '18px',
        },
    },
    'body2-medium': {
        fontWeight: 500,
        fontSize: '0.8rem',
        lineHeight: '14px',
        [theme.breakpoints.up('sm')]: {
            lineHeight: '18px',
        },
    },
    'body2-slashed': {
        fontWeight: 400,
        fontSize: '0.8rem',
        lineHeight: '14px',
        textDecoration: 'line-through',
        [theme.breakpoints.up('sm')]: {
            lineHeight: '18px',
        },
    },
    'body2-bold': {
        fontWeight: 700,
        fontSize: '0.8rem',
        lineHeight: '14px',
        [theme.breakpoints.up('sm')]: {
            lineHeight: '18px',
        },
    },
    link1: {
        fontWeight: 500,
        fontSize: '1rem',
        lineHeight: '17.5px',
        textDecoration: 'underline',
        [theme.breakpoints.up('sm')]: {
            lineHeight: '22.5px',
        },
    },
    link2: {
        fontWeight: 500,
        fontSize: '0.8rem',
        lineHeight: '14px',
        textDecoration: 'underline',
        [theme.breakpoints.up('sm')]: {
            lineHeight: '18px',
        },
    },
    eyebrow1: {
        fontWeight: 700,
        fontSize: '1rem',
        lineHeight: '17.5px',
        textTransform: 'uppercase',
        [theme.breakpoints.up('sm')]: {
            lineHeight: '22.5px',
        },
    },
    eyebrow2: {
        fontWeight: 700,
        fontSize: '0.8rem',
        lineHeight: '14px',
        textTransform: 'uppercase',
        [theme.breakpoints.up('sm')]: {
            lineHeight: '18px',
        },
    },
    button: {
        fontWeight: 700,
        fontSize: '1rem',
        lineHeight: '17.5px',
        textTransform: 'uppercase',
        [theme.breakpoints.up('sm')]: {
            lineHeight: '22.5px',
        },
    },
    stepper: {
        fontWeight: 500,
        fontSize: '0.8rem',
        lineHeight: '14px',
        textTransform: 'uppercase',
        [theme.breakpoints.up('sm')]: {
            lineHeight: '22.5px',
        },
    },
    fieldLabel: {
        fontWeight: 400,
        fontSize: '1rem',
        lineHeight: '17.5px',
        [theme.breakpoints.up('sm')]: {
            lineHeight: '22.5px',
        },
    },
    fieldInput: {
        fontWeight: 400,
        fontSize: '1rem',
        lineHeight: '17.5px',
        [theme.breakpoints.up('sm')]: {
            lineHeight: '22.5px',
        },
    },
    misc1: {
        fontWeight: 400,
        fontSize: '0.64rem',
        lineHeight: '11.2px',
        [theme.breakpoints.up('sm')]: {
            lineHeight: '14.4px',
        },
    },
    misc2: {
        fontWeight: 700,
        fontSize: '0.64rem',
        lineHeight: '11.2px',
        [theme.breakpoints.up('sm')]: {
            lineHeight: '14.4px',
        },
    },
    graphY: {
        textAlign: 'right',
        fontFamily: ['Karla', 'sans-serif'].join(','),
        fontSize: '8.96px',
        fontStyle: 'normal',
        fontWeight: 400,
        lineheight: '11.2px',
    },
    graphX: {
        textAlign: 'right',
        fontFamily: ['Karla', 'sans-serif'].join(','),
        fontSize: '8.96px',
        fontStyle: 'normal',
        fontWeight: 400,
        lineheight: '11.2px',
    },
};

export default typography;
