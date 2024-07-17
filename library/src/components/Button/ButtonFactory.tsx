import React from 'react';
import clsx from 'clsx';
import colorSchemes from './colorSchemes';


interface ButtonProps {
    label: string;
    onClick: () => void;
    variant?: 'solid' | 'outline' | 'ghost' | 'link'; // Button styles
    size?: 'small' | 'medium' | 'large'; // Button sizes
    type?: 'button' | 'submit' | 'reset'; // Button types
    disabled?: boolean; // Disabled state
    icon?: React.ReactNode; // Icon component
    iconPosition?: 'left' | 'right'; // Icon position
    className?: string; // Additional CSS classes
    fullWidth?: boolean; // Full width button
    rounded?: boolean; // Rounded corners
    shadow?: boolean; // Shadow effect
    fontWeight?: 'normal' | 'bold' | 'bolder' | 'lighter'; // Font weight
    textTransform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase'; // Text transformation
    letterSpacing?: 'normal' | 'wide' | 'wider' | 'widest'; // Letter spacing
    hoverEffect?: 'none' | 'opacity' | 'shadow' | 'scale'; // Hover effects
    padding?: 'none' | 'small' | 'medium' | 'large'; // Padding options
}

const buttonVariants = {
    solid: 'bg-current text-white',
    outline: 'border border-current text-current bg-transparent',
    ghost: 'text-current bg-transparent',
    link: 'text-current underline bg-transparent'
};

const buttonSizes = {
    small: 'py-1 px-2 text-sm',
    medium: 'py-2 px-4 text-base',
    large: 'py-3 px-6 text-lg'
};

const fontWeights = {
    normal: 'font-normal',
    bold: 'font-bold',
    bolder: 'font-extrabold',
    lighter: 'font-light'
};

const textTransforms = {
    none: 'normal-case',
    capitalize: 'capitalize',
    uppercase: 'uppercase',
    lowercase: 'lowercase'
};

const letterSpacings = {
    normal: 'tracking-normal',
    wide: 'tracking-wide',
    wider: 'tracking-wider',
    widest: 'tracking-widest'
};

const hoverEffects = {
    none: '',
    opacity: 'hover:opacity-75',
    shadow: 'hover:shadow-lg',
    scale: 'hover:scale-105'
};

const paddings = {
    none: 'p-0',
    small: 'p-1',
    medium: 'p-2',
    large: 'p-4'
};

const ButtonFactory = (colorScheme: keyof typeof colorSchemes): React.FC<ButtonProps> => {
    const Button: React.FC<ButtonProps> = ({
        label,
        onClick,
        variant = 'solid',
        size = 'medium',
        type = 'button',
        className,
        disabled = false,
        icon,
        iconPosition = 'left',
        fullWidth = false,
        rounded = false,
        shadow = false,
        fontWeight = 'normal',
        textTransform = 'none',
        letterSpacing = 'normal',
        hoverEffect = 'none',
        padding = 'medium'
    }) => {
        const buttonClass = clsx(
            'inline-flex items-center justify-center font-medium focus:outline-none transition duration-150 ease-in-out relative',
            buttonVariants[variant],
            buttonSizes[size],
            fontWeights[fontWeight],
            textTransforms[textTransform],
            letterSpacings[letterSpacing],
            hoverEffects[hoverEffect],
            paddings[padding],
            {
                [colorSchemes[colorScheme]]: variant === 'solid',
                'bg-transparent': ['outline', 'ghost', 'link'].includes(variant),
                'opacity-50 cursor-not-allowed': disabled,
                'w-full': fullWidth,
                'rounded-lg': rounded,
                'shadow': shadow,
            },
            className
        );

        return (
            <button
                type={type}
                onClick={onClick}
                className={buttonClass}
                disabled={disabled}
            >
                {icon && iconPosition === 'left' && <span className="mr-2">{icon}</span>}
                <span className='relative justify-center items-center'>
                    {label}
                </span>
                {icon && iconPosition === 'right' && <span className="ml-2">{icon}</span>}
            </button>
        );
    };

    return Button;
};

export default ButtonFactory;
