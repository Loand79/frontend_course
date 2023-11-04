import { getProfileValidateErrors, ValidateErrors } from 'entities/Profile';
describe('getProfileValidateErrors', function () {
    test('should return array with errors', function () {
        var state = {
            profile: {
                validateErrors: [
                    ValidateErrors.SERVER_ERROR,
                    ValidateErrors.INCORRECT_USER_AGE,
                ],
            },
        };
        expect(getProfileValidateErrors(state)).toEqual([
            ValidateErrors.SERVER_ERROR,
            ValidateErrors.INCORRECT_USER_AGE,
        ]);
    });
    test('should return undefined with empty errors array', function () {
        var state = {};
        expect(getProfileValidateErrors(state)).toEqual(undefined);
    });
});
