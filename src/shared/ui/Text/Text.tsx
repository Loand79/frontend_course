import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './Text.module.scss';

export enum TextTheme {
    MAIN = 'main',
    ERROR = 'error',
    INVERTED = 'inverted'
}

export enum TextAlign {
    RIGHT = 'right',
    CENTER = 'center',
    LEFT = 'left',
}

export enum TextSize {
    S = 'size_s',
    M = 'size_m',
    L = 'size_l',
}

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    size?: TextSize;
    theme?: TextTheme;
    align?: TextAlign;
}

type HeaderTagType = 'h1' | 'h2' | 'h3';

const mapSizeToHeader: Record<TextSize, HeaderTagType> = {
    [TextSize.S]: 'h1',
    [TextSize.M]: 'h2',
    [TextSize.L]: 'h3',
};

export const Text = memo((props: TextProps) => {
    const {
        className,
        text,
        title,
        theme = TextTheme.MAIN,
        size = TextSize.M,
        align = TextAlign.LEFT,
    } = props;

    const HeaderTag = mapSizeToHeader[size];

    const mods: Mods = {
        [cls[theme]]: true,
        [cls[align]]: true,
        [cls[size]]: true,
    };

    return (
        <div className={classNames(cls.text, mods, [className])}>
            {title && <HeaderTag className={cls.title}>{title}</HeaderTag>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    );
});
