import { Profile } from '@/entities/Profile';

import { ValidateErrors } from '../../consts/validateErrors';

export const validateProfileData = (profile?: Profile) => {
    if (!profile) {
        return [ValidateErrors.NO_DATA];
    }

    const { first, lastname, age } = profile;
    const errors: ValidateErrors[] = [];

    if (!first || !lastname) {
        errors.push(ValidateErrors.INCORRECT_USER_DATA);
    }

    if (!age || !Number.isInteger(age) || (/^\d+$/.test(String(age)) && age > 100)) {
        errors.push(ValidateErrors.INCORRECT_USER_AGE);
    }
    return errors;
};
