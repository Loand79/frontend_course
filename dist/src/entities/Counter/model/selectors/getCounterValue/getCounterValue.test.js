import { getCounterValue } from './getCounterValue';
describe('getCounterValue', function () {
    test('should get only counter value', function () {
        var state = {
            counter: {
                value: 0,
            },
        };
        expect(getCounterValue(state)).toEqual(0);
    });
});
