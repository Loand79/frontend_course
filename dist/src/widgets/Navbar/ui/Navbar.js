import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { memo, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';
import cls from './Navbar.module.scss';
export var Navbar = memo(function (_a) {
    var className = _a.className;
    var t = useTranslation().t;
    var _b = useState(false), isAuthModal = _b[0], setIsAuthModal = _b[1];
    var authData = useSelector(getUserAuthData);
    var dispatch = useDispatch();
    var onCloseModal = useCallback(function () {
        setIsAuthModal(false);
    }, []);
    var onShowModal = useCallback(function () {
        setIsAuthModal(true);
    }, []);
    var onLogout = useCallback(function () {
        dispatch(userActions.logout());
    }, [dispatch]);
    if (authData) {
        return (_jsx("div", { className: classNames(cls.navbar, {}, [className]), children: _jsx(Button, { theme: "clearInverted", className: cls.links, onClick: onLogout, children: t('Выйти') }) }));
    }
    return (_jsxs("div", { className: classNames(cls.navbar, {}, [className]), children: [_jsx(Button, { theme: "clearInverted", className: cls.links, onClick: onShowModal, children: t('Войти') }), isAuthModal && (_jsx(LoginModal, { isOpen: isAuthModal, onClose: onCloseModal }))] }));
});
