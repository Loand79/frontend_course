import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from 'shared/ui/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { counterActions } from '../model/slice/counterSlice';
export var Counter = function () {
    var dispatch = useDispatch();
    var counterValue = useSelector(getCounterValue);
    var t = useTranslation().t;
    var increment = function () {
        dispatch(counterActions.increment());
    };
    var decrement = function () {
        dispatch(counterActions.decrement());
    };
    return (_jsxs("div", { children: [_jsx("h1", { "data-testid": "value-title", children: counterValue }), _jsx(Button, { onClick: increment, "data-testid": "increment-btn", children: t('increment') }), _jsx(Button, { onClick: decrement, "data-testid": "decrement-btn", children: t('decrement') })] }));
};
