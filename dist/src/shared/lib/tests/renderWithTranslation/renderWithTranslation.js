import { jsx as _jsx } from "react/jsx-runtime";
import { I18nextProvider } from 'react-i18next';
import i18nForTests from 'shared/config/i18n/i18nForTests';
import { render } from '@testing-library/react';
export function renderWithTranslation(component) {
    return render(_jsx(I18nextProvider, { i18n: i18nForTests, children: component }));
}
