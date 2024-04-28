import React, { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';

import DarkIcon from '@/shared/assets/icons/dark.svg?react';
import LightIcon from '@/shared/assets/icons/light.svg?react';
import { Button } from '@/shared/ui/Button';
import { Theme } from '@/shared/const/theme';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { saveJsonSettings } from '@/entities/User';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();
    const dispatch = useAppDispatch();

    const onToggleHandler = useCallback(() => {
        toggleTheme((newTheme) => {
            dispatch(saveJsonSettings({ theme: newTheme }));
        });
    }, [dispatch, toggleTheme]);

    return (
        <Button theme="clear" onClick={onToggleHandler} className={classNames('', {}, [className])}>
            {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
        </Button>
    );
});
