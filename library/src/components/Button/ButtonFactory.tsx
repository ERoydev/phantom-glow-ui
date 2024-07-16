import React from 'react';
import styles from './Button.module.css';
import classNames from 'classnames';

type ButtonVariant = 'primary' | 'light' | 'success' | 'danger';

interface ButtonProps {
  label: string;
  onClick: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

const buttonStyles: { [key in ButtonVariant]: string } = {
  primary: styles.primary,
  light: styles.light,
  success: styles.success,
  danger: styles.danger,
  // Add more variants here
};

const ButtonFactory = (variant: ButtonVariant): React.FC<ButtonProps> => {
  const Button: React.FC<ButtonProps> = ({ label, onClick, type = 'button', className }) => {

    const buttonClass = classNames(styles.button, buttonStyles[variant], className)

    return (
      <button
        type={type}
        onClick={onClick}
        className={buttonClass}
      >
        {label}
      </button>
    );
  };

  return Button;
};

export default ButtonFactory;
