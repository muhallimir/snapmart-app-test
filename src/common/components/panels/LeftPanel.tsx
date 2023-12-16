import { Box, Typography } from '@mui/material';
import lightPalette from 'src/styles/theme/palettes';

const { grey, primary } = lightPalette;

interface Product {
    id: string;
    category: string;
}

interface LeftPanelProps {
    products: Product[];
    categoryChange: (category: string | null) => void;
    selectedCategory: string | null;
}

export default function LeftPanel({
    products,
    categoryChange,
    selectedCategory,
}: LeftPanelProps) {
    const productCategories = new Set<string>();

    return (
        <Box
            sx={{
                background: grey[50],
                width: '15vw',
                cursor: 'pointer',
                minHeight: '100vh',
                paddingTop: '20px',
            }}
        >
            <Typography
                variant="body1"
                sx={{
                    background: selectedCategory ? '' : primary.light,
                    padding: '10px 25px',
                }}
                onClick={() => categoryChange(null)}
            >
                All Items
            </Typography>
            {products?.map((item) => {
                if (!productCategories.has(item.category)) {
                    productCategories.add(item.category);
                    return (
                        <Box
                            key={item.id}
                            sx={{
                                '&:hover': {
                                    background: primary.light,
                                },
                            }}
                        >
                            <Typography
                                variant="body1"
                                sx={{
                                    padding: '10px 25px',
                                    textTransform: 'capitalize',
                                    background:
                                        item.category === selectedCategory ? primary.light : 'inherit',
                                }}
                                onClick={() => categoryChange(item.category)}
                            >
                                {item.category}
                            </Typography>
                        </Box>
                    );
                }
                return null;
            })}
        </Box>
    );
}
