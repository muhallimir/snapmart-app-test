import Button from '@mui/material/Button';
import Link from 'next/link';
import PropTypes from 'prop-types';

export default function MuiButton({
  children,
  href,
  sx,
  variant,
  fit,
  'data-testid': dataTestid,
  ...props
}) {
  const style = {
    p: '15px 16px',
    fontze: '14px',
    lineHeight: '18px',
    width: '100%',
    maxWidth: fit ? 'fit-content' : '100%',
    textAlign: 'center',
    display: 'flex',
    fontWeight: 700,
  };

  const button = (
    <Button
      component={href ? 'a' : 'button'}
      variant={variant}
      sx={{ ...style, ...sx }}
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
}

MuiButton.propTypes = {
  href: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Object)]),
  children: PropTypes.node.isRequired,
  variant: PropTypes.string.isRequired,
  fit: PropTypes.bool,
  sx: PropTypes.instanceOf(Object),
  'data-testid': PropTypes.string,
};

MuiButton.defaultProps = {
  href: null,
  sx: {},
  fit: false,
  'data-testid': null,
};
