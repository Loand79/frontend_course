import { getProfileError } from 'entities/Profile';
describe('getProfileError', function () {
    test('should return error', function () {
        var state = {
            profile: {
                error: '123',
            },
        };
        expect(getProfileError(state)).toEqual('123');
    });
    test('should return undefined with empty state', function () {
        var state = {};
        expect(getProfileError(state)).toEqual(undefined);
    });
});
