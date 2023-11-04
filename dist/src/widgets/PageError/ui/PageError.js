import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import cls from './PageError.module.scss';
var reloadPage = function () {
    // eslint-disable-next-line no-restricted-globals
    location.reload();
};
export var PageError = function (_a) {
    var className = _a.className;
    var t = useTranslation().t;
    return (_jsxs("div", { className: classNames(cls.pageError, {}, [className]), children: [_jsx("p", { children: t('Произошла непредвиденная ошибка') }), _jsx(Button, { onClick: reloadPage, children: t('Обновить станицу') })] }));
};
