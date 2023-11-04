import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { fetchProfileData, getProfileError, getProfileForm, getProfileIsLoading, getProfileReadonly, getProfileValidateErrors, profileActions, ProfileCard, profileReducer, ValidateErrors, } from 'entities/Profile';
import { useCallback, useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';
var reducers = {
    profile: profileReducer,
};
var ProfilePage = function (_a) {
    var _b;
    var className = _a.className;
    var t = useTranslation('profile').t;
    var dispatch = useAppDispatch();
    var formData = useSelector(getProfileForm);
    var error = useSelector(getProfileError);
    var isLoading = useSelector(getProfileIsLoading);
    var readonly = useSelector(getProfileReadonly);
    var validateErrors = useSelector(getProfileValidateErrors);
    var validateErrorTranslate = (_b = {},
        _b[ValidateErrors.INCORRECT_USER_DATA] = t('Поля имя и фамилия должны быть заполнены'),
        _b[ValidateErrors.INCORRECT_USER_AGE] = t('Некоректный возраст'),
        _b[ValidateErrors.NO_DATA] = t('Данные не указаны'),
        _b[ValidateErrors.SERVER_ERROR] = t('Ошибка сервера при сохранении'),
        _b);
    useEffect(function () {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchProfileData());
        }
    }, [dispatch]);
    var onChangeFirstname = useCallback(function (value) {
        dispatch(profileActions.updateProfile({ first: value || '' }));
    }, [dispatch]);
    var onChangeLastname = useCallback(function (value) {
        dispatch(profileActions.updateProfile({ lastname: value || '' }));
    }, [dispatch]);
    var onChangeAge = useCallback(function (value) {
        dispatch(profileActions.updateProfile({ age: Number(value || 0) }));
    }, [dispatch]);
    var onChangeCity = useCallback(function (value) {
        dispatch(profileActions.updateProfile({ city: value || '' }));
    }, [dispatch]);
    var onChangeUsername = useCallback(function (value) {
        dispatch(profileActions.updateProfile({ username: value || '' }));
    }, [dispatch]);
    var onChangeAvatar = useCallback(function (value) {
        dispatch(profileActions.updateProfile({ avatar: value || '' }));
    }, [dispatch]);
    var onChangeCurrency = useCallback(function (currency) {
        dispatch(profileActions.updateProfile({ currency: currency }));
    }, [dispatch]);
    var onChangeCountry = useCallback(function (country) {
        dispatch(profileActions.updateProfile({ country: country }));
    }, [dispatch]);
    return (_jsx(DynamicModuleLoader, { reducers: reducers, removeAfterUnmount: true, children: _jsxs("div", { className: classNames('', {}, [className]), children: [_jsx(ProfilePageHeader, {}), (validateErrors === null || validateErrors === void 0 ? void 0 : validateErrors.length) && validateErrors.map(function (err) { return (_jsx(Text, { text: validateErrorTranslate[err], theme: TextTheme.ERROR }, err)); }), _jsx(ProfileCard, { data: formData, isLoading: isLoading, error: error, readonly: readonly, onChangeFirstname: onChangeFirstname, onChangeLastname: onChangeLastname, onChangeAge: onChangeAge, onChangeCity: onChangeCity, onChangeUsername: onChangeUsername, onChangeAvatar: onChangeAvatar, onChangeCurrency: onChangeCurrency, onChangeCountry: onChangeCountry })] }) }));
};
export default ProfilePage;
