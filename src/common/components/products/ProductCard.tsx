import { useDispatch, useSelector } from 'react-redux';
import { Box, Typography } from '@mui/material';
import lightPalette from 'src/styles/theme/palettes';
import AppButton from '../buttons';
import { incrementCartItem, updateCart } from '@store/cart.slice';
import { currencyFormat } from '@helpers/dataDisplayHelpers';

const { grey, primary, common, green } = lightPalette;

interface Product {
    id: string;
    productName: string;
    description: string;
    unitPrice: number;
    imageUrl: string;
    category: string;
}

interface ProductCardProps {
    products: Product[];
}

export default function ProductCard({ products }: ProductCardProps) {
    const cart = useSelector(({ cart }: { cart: Product[] }) => cart);
    const dispatch = useDispatch();

    const addToCart = (item: Product) => {
        const existingItem = cart.find((cartItem) => cartItem.id === item.id);

        if (existingItem) {
            dispatch(incrementCartItem(item.id));
        } else {
            dispatch(updateCart(item));
        }
    };

    return (
        <Box>
            {products?.map((item) => (
                <Box
                    key={item.id}
                    sx={{
                        display: 'flex',
                        padding: '20px',
                        justifyContent: 'space-evenly',
                        background: grey[50],
                        margin: '25px',
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '120px',
                            height: '100px',
                            background: common.white,
                        }}
                    >
                        <Box
                            component="img"
                            sx={{
                                maxHeight: '100px',
                                maxWidth: '100px',
                                objectFit: 'cover',
                            }}
                            alt={item.productName}
                            src={item.imageUrl}
                        />
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '5px',
                            textTransform: 'capitalize',
                            ml: '15px',
                        }}
                    >
                        <Typography variant="h5" fontWeight={700}>
                            {item.productName}
                        </Typography>
                        <Typography variant="body2" color={green.light}>
                            {item.category}
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{
                                width: '600px',
                            }}
                        >
                            {item.description}
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            width: '200px',
                            justifyContent: 'space-between',
                        }}
                    >
                        <Typography variant="h5" sx={{ fontWeight: 700, color: primary.main }}>
                            Php {currencyFormat(item.unitPrice)}
                        </Typography>
                        <AppButton
                            variant="contained"
                            sx={{
                                background: primary.light,
                                color: common.white,
                                '&:hover': {
                                    background: primary.dark,
                                },
                            }}
                            onClick={() => addToCart(item)}
                        >
                            <Typography variant="body2" fontSize="14px">
                                Add to cart
                            </Typography>
                        </AppButton>
                    </Box>
                </Box>
            ))}
        </Box>
    );
}
