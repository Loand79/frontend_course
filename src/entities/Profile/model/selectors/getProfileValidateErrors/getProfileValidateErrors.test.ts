import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileValidateErrors } from './getProfileValidateErrors';
import { ValidateErrors } from '../../types/profile';

describe('getProfileValidateErrors', () => {
    test('should return array with errors', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                validateErrors: [
                    ValidateErrors.SERVER_ERROR,
                    ValidateErrors.INCORRECT_USER_AGE,
                ],
            },
        };
        expect(getProfileValidateErrors(state as StateSchema)).toEqual(
            [
                ValidateErrors.SERVER_ERROR,
                ValidateErrors.INCORRECT_USER_AGE,
            ],
        );
    });
    test('should return undefined with empty errors array', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined);
    });
});
