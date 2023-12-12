import { LeftPanel } from '@common/components/panels';
import RightPanel from '@common/components/panels/RightPanel';
import ProductCard from '@common/components/products/ProductCard';
import { Box, Typography, Paper, IconButton, InputBase, Select, MenuItem, InputLabel } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export default function Home() {
    const { products, category } = useSelector(({ productList }) => productList);
    const [searchQuery, setSearchQuery] = useState('');
    const [sortBy, setSortBy] = useState('Default');
    const [productItems, setProductItems] = useState(products);
    const [selectedCategory, setSelectedCategory] = useState(null);

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleSortChange = (event) => {
        setSortBy(event.target.value);
    };

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    useEffect(() => {
        const filteredProducts = products
            .filter((product) =>
                product.productName.toLowerCase().includes(searchQuery.toLowerCase())
            )
            .filter((product) => (selectedCategory ? product.category === selectedCategory : true))
            .sort((a, b) => {
                if (sortBy === 'lowToHigh') {
                    return a.unitPrice - b.unitPrice;
                } else if (sortBy === 'highToLow') {
                    return b.unitPrice - a.unitPrice;
                } else {
                    return 0;
                }
            });

        setProductItems(filteredProducts);
    }, [products, searchQuery, sortBy, selectedCategory]);

    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
        }}>
            <LeftPanel products={productItems} selectedCategory={selectedCategory}
                categoryChange={handleCategoryChange} />
            <Box sx={{ width: '100%', }}>
                <Paper
                    component="form"
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        padding: '2px',
                        marginBottom: '16px',
                    }}
                >
                    <IconButton sx={{ padding: '10px' }} aria-label="search">
                        <SearchIcon />
                    </IconButton>
                    <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        placeholder="Search products"
                        value={searchQuery}
                        onChange={handleSearchChange}
                    />
                    <InputLabel>Sortby</InputLabel>
                    <Select
                        value={sortBy}
                        label="Age"
                        onChange={handleSortChange}
                        sx={{ marginLeft: '8px', minWidth: '120px' }}
                    >
                        <MenuItem value="Default">Default</MenuItem>
                        <MenuItem value="lowToHigh">Price Low to High</MenuItem>
                        <MenuItem value="highToLow">Price High to Low</MenuItem>
                    </Select>
                </Paper>
                <Box sx={{
                    maxHeight: '100vh',
                    overflowY: 'scroll'
                }}>
                    <ProductCard products={productItems} />

                </Box>
            </Box>
            <RightPanel />
        </Box >
    );
}
