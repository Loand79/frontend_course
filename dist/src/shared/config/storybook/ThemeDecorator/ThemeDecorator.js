import { jsx as _jsx } from "react/jsx-runtime";
import 'app/styles/index.scss';
import { ThemeProvider } from 'app/providers/ThemeProvider';
export var ThemeDecorator = function (theme) { return function (StoryComponent) { return (_jsx(ThemeProvider, { initialTheme: theme, children: _jsx("div", { className: "app ".concat(theme), children: _jsx(StoryComponent, {}) }) })); }; };
