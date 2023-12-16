import React from 'react';
import MuiButton from './MuiButton';

interface AppButtonProps {
  variant?: 'contained' | 'outlined' | 'default';
  sx?: Record<string, any>; // Add other styles as needed
  onClick?: () => void;
  disabled?: boolean;
  children?: React.ReactNode; // Add children prop
}

interface ButtonMap {
  [key: string]: React.ElementType;
}

const AppButton: React.FC<AppButtonProps> = ({ variant = 'default', ...props }) => {
  const button: ButtonMap = {
    contained: MuiButton,
    outlined: MuiButton,
    default: 'button' as React.ElementType, // Explicitly cast to React.ElementType
  };

  const Button: React.ElementType = button[variant] || button.default;

  return <Button {...props} />;
};



export default AppButton;





