import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { AppLink } from 'shared/ui/AppLink/AppLink';
import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import { useTranslation } from 'react-i18next';
import cls from './SidebarItem.module.scss';
export var SidebarItem = function (_a) {
    var _b;
    var item = _a.item, collapsed = _a.collapsed;
    var isAuth = useSelector(getUserAuthData);
    var t = useTranslation().t;
    if (item.authOnly && !isAuth) {
        return null;
    }
    return (_jsxs(AppLink, { theme: "secondary", to: item.path, className: classNames(cls.item, (_b = {}, _b[cls.collapsed] = collapsed, _b)), children: [_jsx(item.Icon, { className: cls.icon }), _jsx("span", { className: cls.link, children: t(item.text) })] }));
};
