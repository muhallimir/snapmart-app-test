import React, { useState, useEffect, } from 'react';
import { useSelector } from 'react-redux';
import {
    Box,
    Paper,
    IconButton,
    InputBase,
    Select,
    MenuItem,
    InputLabel,
    SelectChangeEvent,
} from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import { LeftPanel } from '@common/components/panels';
import RightPanel from '@common/components/panels/RightPanel';
import ProductCard from '@common/components/products/ProductCard';

interface HomeProps { }

interface Product {
    productName: string;
    category: string;
    unitPrice: number;
}

const Home: React.FC<HomeProps> = () => {
    const { products, category } = useSelector(({ productList }) => productList);
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [sortBy, setSortBy] = useState<string>('Default');
    const [productItems, setProductItems] = useState(products);
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    const handleSortChange = (event: SelectChangeEvent<string>) => {
        setSortBy(event.target.value);
    };

    const handleCategoryChange = (category: string | null) => {
        setSelectedCategory(category);
    };

    useEffect(() => {
        const filteredProducts = products
            .filter((product: Product) =>
                product.productName.toLowerCase().includes(searchQuery.toLowerCase())
            )
            .filter((product: Product) => (selectedCategory ? product.category === selectedCategory : true))
            .sort((a: Product, b: Product) => {
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
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
            }}
        >
            <LeftPanel
                products={productItems}
                selectedCategory={selectedCategory}
                categoryChange={handleCategoryChange}
            />
            <Box sx={{ width: '100%' }}>
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
                        label="Sortby"
                        sx={{ marginLeft: '8px', minWidth: '120px' }}
                        onChange={handleSortChange}
                    >
                        <MenuItem value="Default">Default</MenuItem>
                        <MenuItem value="lowToHigh">Price Low to High</MenuItem>
                        <MenuItem value="highToLow">Price High to Low</MenuItem>
                    </Select>
                </Paper>
                <Box
                    sx={{
                        maxHeight: '100vh',
                        overflowY: 'scroll',
                    }}
                >
                    <ProductCard products={productItems} />
                </Box>
            </Box>
            <RightPanel />
        </Box>
    );
};

export default Home;
