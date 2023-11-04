import { jsx as _jsx } from "react/jsx-runtime";
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './NotFoundPage.module.scss';
export var NotFoundPage = function (_a) {
    var className = _a.className;
    var t = useTranslation().t;
    return (_jsx("div", { className: classNames(cls.notFoundPage, {}, [className]), children: t('Старница не найдена') }));
};
