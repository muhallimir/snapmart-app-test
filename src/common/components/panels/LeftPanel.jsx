import React, { useEffect, useState } from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import lightPalette from "src/styles/theme/palettes";
import PropTypes from 'prop-types';
import Theme from "src/styles/theme";

const { grey, primary } = lightPalette;


export default function LeftPanel({ products, categoryChange, selectedCategory, }) {
    const productCategories = new Set();

    return (
        <Box
            sx={{
                background: grey[50],
                width: "15vw",
                cursor: "pointer",
                minHeight: "100vh",
                paddingTop: "20px",
            }}
        >
            <Typography
                variant="body1"
                sx={{
                    background: selectedCategory ? '' : primary.light,
                    padding: "10px 25px",
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
                                "&:hover": {
                                    background: primary.light,
                                },
                            }}

                        >
                            <Typography
                                variant="body1"
                                sx={{
                                    padding: "10px 25px",
                                    textTransform: "capitalize",
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


LeftPanel.propTypes = {
    products: PropTypes.instanceOf(Array).isRequired,
    selectedCategory: PropTypes.string,
    categoryChange: PropTypes.func,
};

LeftPanel.defaultProps = {
    selectedCategory: 'All',
    categoryChange: () => { },
};