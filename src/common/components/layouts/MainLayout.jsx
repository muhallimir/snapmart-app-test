import { Box, Stack } from '@mui/material';
import TransitionLayout from './TransitionLayout';
import { Header } from '@common/components/headers';
import { useRouter } from 'next/router';

export default function Mainlayout({ children }) {
    const router = useRouter()
    return (
        <Stack
            minHeight="100vh"
            alignItems="center"
        >
            <Box maxWidth="100%">
                <Header />
                <TransitionLayout location={router.pathname}>
                    {children}
                </TransitionLayout>
            </Box>
        </Stack>
    );
}
