import { jsx as _jsx } from "react/jsx-runtime";
import { classNames } from 'shared/lib/classNames/classNames';
import { Loader } from 'shared/ui/Loader/Loader';
import cls from './PageLoader.module.scss';
export var PageLoader = function (_a) {
    var className = _a.className;
    return (_jsx("div", { className: classNames(cls.pageLoader, {}, [className]), children: _jsx(Loader, {}) }));
};
