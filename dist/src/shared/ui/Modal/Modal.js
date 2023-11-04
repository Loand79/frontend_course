import { jsx as _jsx } from "react/jsx-runtime";
import { classNames } from 'shared/lib/classNames/classNames';
import React, { useCallback, useEffect, useRef, useState, } from 'react';
import { Portal } from 'shared/ui/Portal/Portal';
import { useTheme } from 'app/providers/ThemeProvider';
import cls from './Modal.module.scss';
export var Modal = function (props) {
    var _a;
    var className = props.className, children = props.children, isOpen = props.isOpen, onClose = props.onClose, lazy = props.lazy;
    var _b = useState(false), isClosing = _b[0], setIsClosing = _b[1];
    var _c = useState(false), isMounted = _c[0], setIsMounted = _c[1];
    var timerRef = useRef();
    useEffect(function () {
        if (isOpen) {
            setIsMounted(true);
        }
    }, [isOpen]);
    var theme = useTheme().theme;
    var ANIMATION_DELAY = 300;
    var closeHandler = useCallback(function () {
        if (onClose) {
            setIsClosing(true);
            timerRef.current = setTimeout(function () {
                onClose();
                setIsClosing(false);
            }, ANIMATION_DELAY);
        }
    }, [onClose]);
    var onContentClick = function (e) {
        e.stopPropagation();
    };
    var onKeyDown = useCallback(function (e) {
        if (e.key === 'Escape') {
            closeHandler();
        }
    }, [closeHandler]);
    useEffect(function () {
        if (isOpen) {
            // @ts-ignore
            window.addEventListener('keydown', onKeyDown);
        }
        return function () {
            clearTimeout(timerRef.current);
            // @ts-ignore
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onKeyDown]);
    var mods = (_a = {},
        _a[cls.opened] = isOpen,
        _a[cls.isClosing] = isClosing,
        _a);
    if (lazy && !isMounted) {
        return null;
    }
    return (_jsx(Portal, { children: _jsx("div", { className: classNames(cls.modal, mods, [className]), children: _jsx("div", { className: cls.overlay, onClick: closeHandler, children: _jsx("div", { className: cls.content, onClick: onContentClick, children: children }) }) }) }));
};
