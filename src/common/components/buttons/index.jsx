import PropTypes from 'prop-types';
import MuiButton from './MuiButton';

export default function AppButton({ ...props }) {
  const button = {
    contained: MuiButton,
    outlined: MuiButton,
  };

  const Button = button[props.variant] ?? button.default;

  return <Button {...props} />;
}

AppButton.propTypes = {
  variant: PropTypes.string,
};

AppButton.defaultProps = {
  variant: 'default',
};
