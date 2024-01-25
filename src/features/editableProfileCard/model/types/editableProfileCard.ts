import { Profile } from 'entities/Profile';

export enum ValidateErrors {
    INCORRECT_USER_DATA = 'INCORRECT_USER_DATA',
    INCORRECT_USER_AGE = 'INCORRECT_USER_AGE',
    NO_DATA = 'NO_DATA',
    SERVER_ERROR = 'SERVER_ERROR'
}

export interface ProfileSchema {
    data?: Profile;
    form?: Profile;
    isLoading: boolean;
    error?: string;
    readonly: boolean;
    validateErrors?: ValidateErrors[];
}

export type ValidateProfileErrors =
    'INCORRECT_USER_DATA'
    | 'INCORRECT_USER_AGE'
    | 'NO_DATA'
    | 'SERVER_ERROR'
