import {classNames} from "shared/lib/classNames";
import cls from './ThemeSwitcher.module.scss';
import React from "react";
import {Theme, useTheme} from "app/providers/ThemeProvider";

import DarkIcon from 'shared/assets/icons/dark.svg'
import LightIcon from 'shared/assets/icons/light.svg'
import {Button} from "shared/ui/Button/Button";


interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {

    const {theme, toggleTheme} = useTheme()

    return (
        <Button
            theme={'clear'}
            onClick={toggleTheme}
            className={classNames(cls.ThemeSwitcher, {}, [className])}
        >
            {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
        </Button>
    );
};

