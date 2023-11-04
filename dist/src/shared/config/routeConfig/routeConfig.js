var _a, _b;
import { jsx as _jsx } from "react/jsx-runtime";
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { ProfilePage } from 'pages/ProfilePage';
export var AppRoutes;
(function (AppRoutes) {
    AppRoutes["MAIN"] = "main";
    AppRoutes["ABOUT"] = "about";
    AppRoutes["PROFILE"] = "profile";
    AppRoutes["NOT_FOUND"] = "not found";
})(AppRoutes || (AppRoutes = {}));
export var RoutePath = (_a = {},
    _a[AppRoutes.MAIN] = '/',
    _a[AppRoutes.ABOUT] = '/about',
    _a[AppRoutes.PROFILE] = '/profile',
    _a[AppRoutes.NOT_FOUND] = '*',
    _a);
export var routeConfig = (_b = {},
    _b[AppRoutes.MAIN] = {
        path: RoutePath[AppRoutes.MAIN],
        element: _jsx(MainPage, {}),
    },
    _b[AppRoutes.ABOUT] = {
        path: RoutePath[AppRoutes.ABOUT],
        element: _jsx(AboutPage, {}),
    },
    _b[AppRoutes.PROFILE] = {
        path: RoutePath[AppRoutes.PROFILE],
        element: _jsx(ProfilePage, {}),
        authOnly: true,
    },
    _b[AppRoutes.NOT_FOUND] = {
        path: RoutePath[AppRoutes.NOT_FOUND],
        element: _jsx(NotFoundPage, {}),
    },
    _b);
