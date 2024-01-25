import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ValidateErrors } from '../../types/editableProfileCard';
import { validateProfileData } from './validateProfileData';

const data = {
    username: 'admin',
    age: 22,
    country: Country.Russia,
    lastname: 'nigga',
    first: 'pog',
    city: 'Moscow',
    currency: Currency.RUB,
};

describe('validateProfileData.test', () => {
    test('success', async () => {
        const result = validateProfileData(data);
        expect(result).toEqual([]);
    });

    test('without first and lastname', async () => {
        const result = validateProfileData({ ...data, first: '', lastname: '' });
        expect(result).toEqual([
            ValidateErrors.INCORRECT_USER_DATA,
        ]);
    });

    test('incorrect age', async () => {
        const result = validateProfileData({ ...data, age: NaN });
        expect(result).toEqual([
            ValidateErrors.INCORRECT_USER_AGE,
        ]);
    });

    test('age is upper 100', async () => {
        const result = validateProfileData({ ...data, age: 101 });
        expect(result).toEqual([
            ValidateErrors.INCORRECT_USER_AGE,
        ]);
    });

    test('incorrect all', async () => {
        const result = validateProfileData({});
        expect(result).toEqual([
            ValidateErrors.INCORRECT_USER_DATA,
            ValidateErrors.INCORRECT_USER_AGE,
        ]);
    });
});
