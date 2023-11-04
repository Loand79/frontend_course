import { jsx as _jsx } from "react/jsx-runtime";
import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import { Suspense } from 'react';
import { Loader } from 'shared/ui/Loader/Loader';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';
export var LoginModal = function (_a) {
    var className = _a.className, isOpen = _a.isOpen, onClose = _a.onClose;
    return (_jsx(Modal, { className: classNames('', {}, [className]), isOpen: isOpen, onClose: onClose, lazy: true, children: _jsx(Suspense, { fallback: _jsx(Loader, {}), children: _jsx(LoginFormAsync, { onSuccess: onClose }) }) }));
};
