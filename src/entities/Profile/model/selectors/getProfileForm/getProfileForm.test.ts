import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileForm } from 'entities/Profile';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';

describe('getProfileForm', () => {
    test('should return data', () => {
        const data = {
            username: 'admin',
            age: 22,
            country: Country.Russia,
            lastname: 'nigga',
            first: 'pog',
            city: 'Moscow',
            currency: Currency.RUB,
        };
        const state: DeepPartial<StateSchema> = {
            profile: {
                form: data,
            },
        };
        expect(getProfileForm(state as StateSchema)).toEqual(data);
    });
    test('should return undefined with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileForm(state as StateSchema)).toEqual(undefined);
    });
});