import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useMemo } from 'react';
import cls from './Select.module.scss';
export var Select = memo(function (props) {
    var className = props.className, label = props.label, options = props.options, value = props.value, onChange = props.onChange, readonly = props.readonly;
    var onChangeHandler = function (e) {
        onChange === null || onChange === void 0 ? void 0 : onChange(e.target.value);
    };
    var optionsList = useMemo(function () { return options === null || options === void 0 ? void 0 : options.map(function (opt) { return (_jsx("option", { value: opt.value, className: cls.option, children: opt.content }, opt.value)); }); }, [options]);
    var mods = {};
    return (_jsxs("div", { className: classNames(cls.wrapper, mods, [className]), children: [label && (_jsx("span", { className: cls.label, children: label })), _jsx("select", { className: cls.select, value: value, onChange: onChangeHandler, disabled: readonly, children: optionsList })] }));
});
