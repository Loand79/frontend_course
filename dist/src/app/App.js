import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { Suspense, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { useDispatch } from 'react-redux';
import { userActions } from 'entities/User';
function App() {
    var theme = useTheme().theme;
    var dispatch = useDispatch();
    useEffect(function () {
        dispatch(userActions.initAuthData());
    }, [dispatch]);
    return (_jsx("div", { className: classNames('app', { hovered: true, selected: false }, []), children: _jsxs(Suspense, { fallback: "", children: [_jsx(Navbar, {}), _jsxs("div", { className: "content-page", children: [_jsx(Sidebar, {}), _jsx(AppRouter, {})] })] }) }));
}
export default App;
