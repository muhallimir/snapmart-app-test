import { Box, Typography, Modal } from "@mui/material"
import lightPalette from "src/styles/theme/palettes";
import AppButton from "../buttons";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, decrementCartItem, incrementCartItem, loadCartFromStorage, updateCart } from "@store/cart.slice";
import { currencyFormat, truncateText } from "@helpers/dataDisplayHelpers";
import { useEffect, useState } from "react";
import SuccessPurchase from "../modals/SuccessPurchase";

const { grey, error, warning, common } = lightPalette;

export default function RightPanel() {
    const dispatch = useDispatch()
    const cart = useSelector(({ cart }) => cart)
    const [openModal, setOpenModal] = useState(false)

    const calculateTotalAmount = () => {
        let totalAmount = 0;
        cart.forEach((item) => {
            totalAmount += item.unitPrice * item.quantity;
        });
        return totalAmount;
    };

    const calculateTotalQuantity = () => {
        let totalQuantity = 0;
        cart.forEach((item) => {
            totalQuantity += item.quantity;
        });
        return totalQuantity;
    };


    const incrementQuantity = (itemId) => {
        dispatch(incrementCartItem(itemId));
    };

    const decrementQuantity = (itemId) => {
        dispatch(decrementCartItem(itemId));
    };

    const emptyCart = () => {
        dispatch(clearCart())
    }

    const triggerSuccessPurchase = () => {
        if (cart.length > 0) {
            setOpenModal(true);
            emptyCart()
        }
    }

    const handleCloseModal = () => {
        setOpenModal(false);
    };


    return (
        <Box sx={{
            background: grey[50],
            width: '350px',
            height: '80vh'
        }}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                background: grey[200],
                padding: '10px',
                justifyContent: 'space-between',
                gap: '5px'
            }}>
                <Typography variant='h4-reg'>My Cart</Typography>
                <Box sx={{ alignSelf: "flex-end" }}>
                    <AppButton variant='contained' sx={{
                        background: error.main,
                        '&:hover': {
                            background: warning.secondary,
                            color: common.black
                        },
                    }}
                        onClick={() => emptyCart()}
                        disabled={cart.length === 0}>
                        <Typography variant='body2' fontSize="10px">clear cart</Typography>
                    </AppButton>
                </Box>
            </Box>
            <Box sx={{
                height: '65vh',
                overflowY: 'scroll',
                padding: '20px',
            }}>
                {cart.length > 0 && (
                    cart.slice().reverse().map((item) => {
                        return (
                            <Box key={item.id} sx={{ display: 'flex', flexDirection: 'column', mb: '25px' }}>
                                <Box sx={{ display: 'flex', flexDirection: 'row', gap: '10px', alignItems: 'center' }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '50px', width: '50px', marginY: '5px', background: common.white }}>
                                        <Box
                                            component="img"
                                            sx={{
                                                maxHeight: '100px',
                                                maxWidth: '50px',
                                                objectFit: 'cover',

                                            }}
                                            alt={item.productName}
                                            src={item.imageUrl}
                                        />
                                    </Box>
                                    <Box sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '2px'
                                    }}>
                                        <Typography variant='body1'>{truncateText(item.productName, 17)}</Typography>
                                        <Typography variant='body2' fontWeight={700}>Php {currencyFormat(item.unitPrice * item.quantity)}</Typography>
                                        <Typography variant='body2'>
                                            Quantity: <Typography component='span' variant='body2-bold'>
                                                {item.quantity}
                                            </Typography>
                                        </Typography>
                                        <Box sx={{ display: 'flex', flexDirection: 'row', gap: '1.5px', alignItems: 'center' }}>
                                            <AppButton
                                                variant='outlined'
                                                onClick={() => decrementQuantity(item.id)}
                                                sx={{
                                                    fontSize: '14px',
                                                    height: '2px'
                                                }}
                                            >
                                                -
                                            </AppButton>
                                            <AppButton
                                                variant='outlined'
                                                onClick={() => incrementQuantity(item.id)}
                                                sx={{
                                                    fontSize: '14px',
                                                    height: '2px'
                                                }}
                                            >
                                                +
                                            </AppButton>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        )
                    })
                )}
            </Box>
            <Box sx={{
                background: grey[200],
                padding: '10px',
                borderTop: '1px solid #ccc',
                display: 'flex',
                flexDirection: 'column',
                bottom: 0,
                gap: '5px',
            }}>
                <Typography variant='body1' >Total items:
                    <Typography component='span' fontWeight='700'>
                        {' '}{calculateTotalQuantity()}
                    </Typography>
                </Typography>
                <Typography variant='body1'>Total Amount:
                    <Typography component='span' fontWeight='700'> Php {currencyFormat(calculateTotalAmount())}
                    </Typography>
                </Typography>
                <AppButton variant='contained' onClick={triggerSuccessPurchase} disabled={cart.length === 0} sx={{
                    background: 'yellow', color: 'black', '&:hover': {
                        background: warning.secondary,
                        color: common.black
                    }
                }} >Checkout</AppButton>
            </Box>
            <Modal open={openModal} onClose={handleCloseModal}>
                <Box
                    sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        bgcolor: "background.paper",
                        boxShadow: 24,
                        p: 4,
                    }}
                >
                    <SuccessPurchase />
                    <AppButton variant="contained" onClick={handleCloseModal}>
                        Close
                    </AppButton>
                </Box>
            </Modal>
        </Box >
    )
}
