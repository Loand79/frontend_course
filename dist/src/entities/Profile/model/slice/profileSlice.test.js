import { profileActions, profileReducer, updateProfileData, ValidateErrors, } from 'entities/Profile';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
var data = {
    username: 'admin',
    age: 22,
    country: Country.Russia,
    lastname: 'nigga',
    first: 'pog',
    city: 'Moscow',
    currency: Currency.RUB,
};
describe('profileSlice.test', function () {
    test('test set readonly', function () {
        var state = { readonly: false };
        expect(profileReducer(state, profileActions.setReadonly(true))).toEqual({ readonly: true });
    });
    test('test cancel edit', function () {
        var state = { data: data, form: { username: '' } };
        expect(profileReducer(state, profileActions.cancelEdit())).toEqual({
            readonly: true,
            validateErrors: undefined,
            data: data,
            form: data,
        });
    });
    test('test update profile', function () {
        var state = { form: { username: '123' } };
        expect(profileReducer(state, profileActions.updateProfile({
            username: '123456',
        }))).toEqual({
            form: { username: '123456' },
        });
    });
    test('test update profile service pending', function () {
        var state = {
            isLoading: false,
            validateErrors: [ValidateErrors.SERVER_ERROR],
        };
        expect(profileReducer(state, updateProfileData.pending)).toEqual({
            isLoading: true,
            validateErrors: undefined,
        });
    });
    test('test update profile service fulfilled', function () {
        var state = {
            isLoading: true,
        };
        expect(profileReducer(state, updateProfileData.fulfilled(data, ''))).toEqual({
            isLoading: false,
            validateErrors: undefined,
            readonly: true,
            form: data,
            data: data,
        });
    });
});
