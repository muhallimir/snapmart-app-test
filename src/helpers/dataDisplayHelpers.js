export const currencyFormat = (number) => {
    if (typeof number !== 'number') {
        throw new Error('Input must be a number');
    }

    return number.toLocaleString('en-US', { style: 'decimal' });
}


export const truncateText = (text, maxLength) => {
    if (text?.length <= maxLength) {
        return text;
    }
    return text?.substring(0, maxLength - 3) + '...';
};