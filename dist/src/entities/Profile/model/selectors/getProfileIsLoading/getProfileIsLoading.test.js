import { getProfileIsLoading } from 'entities/Profile';
describe('getProfileIsLoading', function () {
    test('should return true on loading', function () {
        var state = {
            profile: {
                isLoading: true,
            },
        };
        expect(getProfileIsLoading(state)).toEqual(true);
    });
    test('should return undefined with empty state', function () {
        var state = {};
        expect(getProfileIsLoading(state)).toEqual(undefined);
    });
});
