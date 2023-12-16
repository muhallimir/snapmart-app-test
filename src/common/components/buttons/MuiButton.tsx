import React from 'react';
import Button from '@mui/material/Button';
import Link from 'next/link';

interface MuiButtonProps {
  children: React.ReactNode;
  href: string | null | object;
  sx?: React.CSSProperties;
  variant: string;
  fit?: boolean;
  'data-testid'?: string | null;
}

const MuiButton: React.FC<MuiButtonProps> = ({
  children,
  href,
  sx,
  variant,
  fit,
  'data-testid': dataTestid,
  ...props
}) => {
  const style: React.CSSProperties = {
    padding: '15px 16px',
    fontSize: '14px', // Corrected typo from 'fontze' to 'fontSize'
    lineHeight: '18px',
    width: '100%',
    maxWidth: fit ? 'fit-content' : '100%',
    textAlign: 'center',
    display: 'flex',
    fontWeight: 700,
  };

  const validHref = typeof href === 'string' ? href : '#';

  const button = (
    <Button
      component={href ? 'a' : 'button'}
      variant={variant as any}
      sx={{ ...style, ...sx, }}
      {...props}
    >
      {children}
    </Button>
  );

  if (href === null) return button;

  return (
    <Link href={validHref} passHref>
      {button}
    </Link>
  );
};

export default MuiButton;
