import React, { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';

import ThemeIconDeprecated from '@/shared/assets/icons/light.svg?react';
import Switcher from '@/shared/assets/icons/switcher.svg?react';
import { Button as ButtonDeprecated } from '@/shared/ui/deprecated/Button';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { saveJsonSettings } from '@/entities/User';
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon';
import { ToggleFeatures } from '@/shared/lib/features';
import { Icon } from '@/shared/ui/redesigned/Icon';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
    const { toggleTheme } = useTheme();
    const dispatch = useAppDispatch();

    const onToggleHandler = useCallback(() => {
        toggleTheme((newTheme) => {
            dispatch(saveJsonSettings({ theme: newTheme }));
        });
    }, [dispatch, toggleTheme]);

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={<Icon Svg={Switcher} clickable onClick={onToggleHandler} />}
            off={
                <ButtonDeprecated theme="clear" onClick={onToggleHandler} className={classNames('', {}, [className])}>
                    <IconDeprecated Svg={ThemeIconDeprecated} width={40} height={40} inverted />
                </ButtonDeprecated>
            }
        />
    );
});
