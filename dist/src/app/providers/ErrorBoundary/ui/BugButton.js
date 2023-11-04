import { jsx as _jsx } from "react/jsx-runtime";
import { Button } from 'shared/ui/Button/Button';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
// компонент для тестирования
export var BugButton = function () {
    var _a = useState(false), error = _a[0], setError = _a[1];
    var t = useTranslation().t;
    var throwError = function () {
        setError(true);
    };
    useEffect(function () {
        if (error) {
            throw new Error();
        }
    }, [error]);
    return (_jsx(Button, { onClick: throwError, children: t('throw error') }));
};
