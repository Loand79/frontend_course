import { getProfileData } from 'entities/Profile';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
describe('getProfileData', function () {
    test('should return data', function () {
        var data = {
            username: 'admin',
            age: 22,
            country: Country.Russia,
            lastname: 'nigga',
            first: 'pog',
            city: 'Moscow',
            currency: Currency.RUB,
        };
        var state = {
            profile: {
                data: data,
            },
        };
        expect(getProfileData(state)).toEqual(data);
    });
    test('should return undefined with empty state', function () {
        var state = {};
        expect(getProfileData(state)).toEqual(undefined);
    });
});