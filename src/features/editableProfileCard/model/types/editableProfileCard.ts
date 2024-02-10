import { Profile } from '@/entities/Profile';
import { ValidateErrors } from '../consts/validateErrors';

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
