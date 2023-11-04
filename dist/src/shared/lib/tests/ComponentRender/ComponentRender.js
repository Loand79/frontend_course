import { jsx as _jsx } from "react/jsx-runtime";
import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18nForTests from 'shared/config/i18n/i18nForTests';
import { MemoryRouter } from 'react-router-dom';
import { StoreProvider } from 'app/providers/StoreProvider';
export function ComponentRender(component, options) {
    if (options === void 0) { options = {}; }
    var _a = options.route, route = _a === void 0 ? '/' : _a, initialState = options.initialState;
    return render(_jsx(MemoryRouter, { initialEntries: [route], children: _jsx(StoreProvider, { initialState: initialState, children: _jsx(I18nextProvider, { i18n: i18nForTests, children: component }) }) }));
}
