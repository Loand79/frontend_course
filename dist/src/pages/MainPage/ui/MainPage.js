import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/providers/ErrorBoundary';
import { Input } from 'shared/ui/Input/Input';
var MainPage = function () {
    var t = useTranslation('main').t;
    var _a = useState(''), value = _a[0], setValue = _a[1];
    return (_jsxs("div", { children: [_jsx(BugButton, {}), t('Главная страница'), _jsx(Input, { value: value, onChange: function (value) { return setValue(value); } })] }));
};
export default MainPage;
