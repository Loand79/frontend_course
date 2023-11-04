import { jsx as _jsx } from "react/jsx-runtime";
import { classNames } from 'shared/lib/classNames/classNames';
import React, { memo } from 'react';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import DarkIcon from 'shared/assets/icons/dark.svg';
import LightIcon from 'shared/assets/icons/light.svg';
import { Button } from 'shared/ui/Button/Button';
export var ThemeSwitcher = memo(function (_a) {
    var className = _a.className;
    var _b = useTheme(), theme = _b.theme, toggleTheme = _b.toggleTheme;
    return (_jsx(Button, { theme: "clear", onClick: toggleTheme, className: classNames('', {}, [className]), children: theme === Theme.DARK ? _jsx(DarkIcon, {}) : _jsx(LightIcon, {}) }));
});
