import { render, screen } from '@testing-library/react';
import { Button } from '../Button/Button';

describe('Button', () => {
    test('есть в дереве', () => {
        render(<Button>Test</Button>);
        expect(screen.getByText('Test')).toBeInTheDocument();
    });
    test('есть указаный класс', () => {
        render(<Button theme="clear">Test</Button>);
        expect(screen.getByText('Test')).toHaveClass('clear');
        screen.debug();
    });
});
