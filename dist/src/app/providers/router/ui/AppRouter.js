import { jsx as _jsx } from "react/jsx-runtime";
import React, { memo, Suspense, useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader/PageLoader';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
var AppRouter = function () {
    var isAuth = useSelector(getUserAuthData);
    var routes = useMemo(function () { return Object.values(routeConfig).filter(function (route) {
        if (route.authOnly && !isAuth) {
            return false;
        }
        return true;
    }); }, [isAuth]);
    return (_jsx(Routes, { children: routes.map(function (_a) {
            var element = _a.element, path = _a.path;
            return ( // при переходе на 6 версию react-router можно использовать useRoutes
            _jsx(Route, { path: path, element: (_jsx(Suspense, { fallback: _jsx(PageLoader, {}), children: _jsx("div", { className: "page-wrapper", children: element }) })) }, path));
        }) }));
};
export default memo(AppRouter);
