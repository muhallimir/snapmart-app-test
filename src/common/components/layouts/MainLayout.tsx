import React, { ReactNode } from 'react';
import { Box, Stack } from '@mui/material';
import { Header } from '@common/components/headers';

interface MainLayoutProps {
    children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {

    return (
        <Stack minHeight="100vh" alignItems="center">
            <Box width="87%">
                <Header />
                {children}
            </Box>
        </Stack>
    );
};

export default MainLayout;
