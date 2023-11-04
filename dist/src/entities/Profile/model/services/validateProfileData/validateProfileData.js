import { ValidateErrors } from '../../types/profile';
export var validateProfileData = function (profile) {
    if (!profile) {
        return [ValidateErrors.NO_DATA];
    }
    var first = profile.first, lastname = profile.lastname, age = profile.age;
    var errors = [];
    if (!first || !lastname) {
        errors.push(ValidateErrors.INCORRECT_USER_DATA);
    }
    if (!age || !Number.isInteger(age) || (/^\d+$/.test(String(age)) && age > 100)) {
        errors.push(ValidateErrors.INCORRECT_USER_AGE);
    }
    return errors;
};
