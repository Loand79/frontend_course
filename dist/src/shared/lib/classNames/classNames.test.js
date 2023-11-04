import { classNames } from 'shared/lib/classNames/classNames';
describe('classNames', function () {
    test('with only first param', function () {
        expect(classNames('someClass')).toBe('someClass');
    });
    test('with additional class', function () {
        expect(classNames('someClass', {}, ['class1', 'class2'])).toBe('someClass class1 class2');
    });
    test('with mods true', function () {
        expect(classNames('someClass', { hovered: true, scrollable: true }, ['class1', 'class2']))
            .toBe('someClass class1 class2 hovered scrollable');
    });
    test('with mods false', function () {
        expect(classNames('someClass', { hovered: true, scrollable: false }, ['class1', 'class2']))
            .toBe('someClass class1 class2 hovered');
    });
    test('with mods undefined', function () {
        expect(classNames('someClass', { hovered: true, scrollable: undefined }, ['class1', 'class2']))
            .toBe('someClass class1 class2 hovered');
    });
});
