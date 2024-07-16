import React from 'react';
import styles from './Button.module.css';
import classNames from 'classnames';

type ButtonVariant = 'default' | 'success' | 'danger' | 'yellow' | 'purple' | 'midnight';

interface ButtonProps {
    label: string;
    onClick: () => void;
    type?: 'button' | 'submit' | 'reset';
    className?: string;
}

const buttonStyles: { [key in ButtonVariant]: string } = {
    default: styles.default,
    success: styles.success,
    danger: styles.danger,
    yellow: styles.yellow,
    purple: styles.purple,
    midnight: styles.midnight,
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
                <span className='relative justify-center items-center'>
                    {label}
                </span>
            </button>

        );
    };

    return Button;
};

export default ButtonFactory;
