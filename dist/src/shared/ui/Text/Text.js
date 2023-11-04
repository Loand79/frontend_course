import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './Text.module.scss';
export var TextTheme;
(function (TextTheme) {
    TextTheme["MAIN"] = "main";
    TextTheme["ERROR"] = "error";
})(TextTheme || (TextTheme = {}));
export var TextAlign;
(function (TextAlign) {
    TextAlign["RIGHT"] = "right";
    TextAlign["CENTER"] = "center";
    TextAlign["LEFT"] = "left";
})(TextAlign || (TextAlign = {}));
export var Text = memo(function (props) {
    var _a;
    var className = props.className, text = props.text, title = props.title, _b = props.theme, theme = _b === void 0 ? TextTheme.MAIN : _b, _c = props.align, align = _c === void 0 ? TextAlign.LEFT : _c;
    var mods = (_a = {},
        _a[cls[theme]] = true,
        _a[cls[align]] = true,
        _a);
    return (_jsxs("div", { className: classNames(cls.text, mods, [className]), children: [title && _jsx("p", { className: cls.title, children: title }), text && _jsx("p", { className: cls.text, children: text })] }));
});
