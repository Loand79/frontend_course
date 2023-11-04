import { jsx as _jsx } from "react/jsx-runtime";
import { render, screen } from '@testing-library/react';
import { Button } from 'shared/ui/Button/Button';
describe('Button', function () {
    test('есть в дереве', function () {
        render(_jsx(Button, { children: "Test" }));
        expect(screen.getByText('Test')).toBeInTheDocument();
    });
    test('есть указаный класс', function () {
        render(_jsx(Button, { theme: "clear", children: "Test" }));
        expect(screen.getByText('Test')).toHaveClass('clear');
        screen.debug();
    });
});
