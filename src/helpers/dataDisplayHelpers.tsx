export const currencyFormat = (number: number): string => {
    if (typeof number !== 'number') {
        throw new Error('Input must be a number');
    }

    return number.toLocaleString('en-US', { style: 'decimal' });
};

export const truncateText = (text: string, maxLength: number): string | undefined => {
    if (text?.length && text.length <= maxLength) {
        return text;
    }
    return text?.substring(0, maxLength - 3) + '...';
};
