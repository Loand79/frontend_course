import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { classNames } from 'shared/lib/classNames/classNames';
import React, { memo, useState } from 'react';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { Button } from 'shared/ui/Button/Button';
import { LangSwitcher } from 'widgets/LangSwitcher/LangSwitcher';
import { useTranslation } from 'react-i18next';
import { SidebarItemsList } from '../../model/items';
import { SidebarItem } from '../../ui/SidebarItem/SidebarItem';
import cls from './Sidebar.module.scss';
export var Sidebar = memo(function (_a) {
    var _b;
    var className = _a.className;
    var _c = useState(false), collapsed = _c[0], setCollapsed = _c[1];
    var t = useTranslation().t;
    var onToggle = function () {
        setCollapsed(function (prev) { return !prev; });
    };
    return (_jsxs("div", { "data-testid": "sidebar", className: classNames(cls.sidebar, (_b = {}, _b[cls.collapsed] = collapsed, _b), [className]), children: [_jsx(Button, { "data-testid": "sidebar-toggle", onClick: onToggle, className: cls.collapsedBtn, theme: "backgroundInverted", square: true, size: "size_l", children: collapsed ? '>' : '<' }), _jsx("div", { className: cls.items, children: SidebarItemsList.map(function (item) { return (_jsx(SidebarItem, { item: item, collapsed: collapsed }, item.path)); }) }), _jsxs("div", { className: cls.switchers, children: [_jsx(ThemeSwitcher, {}), _jsx(LangSwitcher, { short: collapsed, className: cls.lang })] })] }));
});
