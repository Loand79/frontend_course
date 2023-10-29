import { classNames, Modifiers } from 'shared/lib/classNames/classNames';
import {
    ButtonHTMLAttributes, memo, ReactNode,
} from 'react';
import cls from './Button.module.scss';

export type ButtonTheme = 'clear' | 'outline' | 'background' | 'backgroundInverted' | 'clearInverted'
export type ButtonSize = 'size_m' | 'size_l'| 'size_xl'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    theme?: ButtonTheme;
    square? : boolean;
    size? : ButtonSize;
    disabled?: boolean;
    children?: ReactNode;
}

export const Button = memo((props: ButtonProps) => {
    const {
        className,
        children,
        theme = 'outline',
        square,
        size = 'size_m',
        disabled,
        ...otherProps
    } = props;

    const mods: Modifiers = {
        [cls.square]: square,
        [cls[size]]: true,
        [cls.disabled]: disabled,
    };

    return (
        <button
            type="button"
            className={classNames(cls.button, mods, [className, cls[theme]])}
            disabled={disabled}
            {...otherProps}
        >
            {children}
        </button>
    );
});
