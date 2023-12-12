import { Box, Typography } from '@mui/material';
import lightPalette from 'src/styles/theme/palettes';

const { common, grey } = lightPalette

export default function Header() {
    return (
        <Box sx={{ background: grey[400], mx: 'auto' }}>
            <Typography variant='h3' sx={{
                color: common.white,
                padding: '15px 20px'
            }}>Online shopping store</Typography>
        </Box>
    )
}
