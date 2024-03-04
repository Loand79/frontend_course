import React, { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';

import DarkIcon from '@/shared/assets/icons/dark.svg?react';
import LightIcon from '@/shared/assets/icons/light.svg?react';
import { Button } from '@/shared/ui/Button/Button';
import { Theme } from '@/shared/const/theme';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            theme="clear"
            onClick={toggleTheme}
            className={classNames('', {}, [className])}
        >
            {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
        </Button>
    );
});
