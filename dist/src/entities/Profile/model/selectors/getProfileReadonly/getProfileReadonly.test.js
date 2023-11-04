import { getProfileReadonly } from 'entities/Profile';
describe('getProfileReadonly', function () {
    test('should return true', function () {
        var state = {
            profile: {
                readonly: true,
            },
        };
        expect(getProfileReadonly(state)).toEqual(true);
    });
    test('should return undefined with empty state', function () {
        var state = {};
        expect(getProfileReadonly(state)).toEqual(undefined);
    });
});
