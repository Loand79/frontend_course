import { jsx as _jsx } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { createReduxStore } from 'app/providers/StoreProvider/config/store';
import { useNavigate } from 'react-router-dom';
export var StoreProvider = function (_a) {
    var children = _a.children, initialState = _a.initialState, asyncReducers = _a.asyncReducers;
    var navigate = useNavigate();
    var store = createReduxStore(initialState, asyncReducers, navigate);
    return (_jsx(Provider, { store: store, children: children }));
};
