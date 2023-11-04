import { jsx as _jsx } from "react/jsx-runtime";
import { screen } from '@testing-library/react';
import { ComponentRender } from 'shared/lib/tests/ComponentRender/ComponentRender';
import { userEvent } from '@storybook/testing-library';
import { Counter } from './Counter';
describe('Counter', function () {
    test('with only one param', function () {
        ComponentRender(_jsx(Counter, {}), {
            initialState: { counter: { value: 10 } },
        });
        expect(screen.getByTestId('value-title')).toHaveTextContent('10');
    });
    test('increment', function () {
        ComponentRender(_jsx(Counter, {}), {
            initialState: { counter: { value: 10 } },
        });
        userEvent.click(screen.getByTestId('increment-btn'));
        expect(screen.getByTestId('value-title')).toHaveTextContent('11');
    });
    test('decrement', function () {
        ComponentRender(_jsx(Counter, {}), {
            initialState: { counter: { value: 10 } },
        });
        userEvent.click(screen.getByTestId('decrement-btn'));
        expect(screen.getByTestId('value-title')).toHaveTextContent('9');
    });
});
