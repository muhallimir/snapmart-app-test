import { GlobalStyles } from '@mui/material';
import variables from './theme/variables';

const setGlobalStyles = (theme, props) => (
    <GlobalStyles
        styles={{
            ':root': {
                ...variables,
                fontSize: 14,
                [theme.breakpoints.up('sm')]: {
                    fontSize: 18,
                },
                ...props,
            },
        }}
    />
);

export default setGlobalStyles;
