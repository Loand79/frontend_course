import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader/Loader';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { CurrencySelect } from 'entities/Currency/ui/CurrencySelect/CurrencySelect';
import { CountrySelect } from 'entities/Country';
import cls from './ProfileCard.module.scss';
export var ProfileCard = function (_a) {
    var _b, _c;
    var className = _a.className, data = _a.data, error = _a.error, isLoading = _a.isLoading, readonly = _a.readonly, onChangeFirstname = _a.onChangeFirstname, onChangeLastname = _a.onChangeLastname, onChangeAge = _a.onChangeAge, onChangeCity = _a.onChangeCity, onChangeUsername = _a.onChangeUsername, onChangeAvatar = _a.onChangeAvatar, onChangeCurrency = _a.onChangeCurrency, onChangeCountry = _a.onChangeCountry;
    var t = useTranslation('profile').t;
    if (isLoading) {
        return (_jsx("div", { className: classNames(cls.profileCard, (_b = {}, _b[cls.loading] = true, _b), [className]), children: _jsx(Loader, {}) }));
    }
    if (error) {
        return (_jsx("div", { className: classNames(cls.profileCard, {}, [className, cls.error]), children: _jsx(Text, { theme: TextTheme.ERROR, title: t('Произошла ошибка при загрузке профиля'), text: t('Пожалуйста перезаугрзите страницу'), align: TextAlign.CENTER }) }));
    }
    var mods = (_c = {},
        _c[cls.editing] = !readonly,
        _c);
    // todo замутить инпут лист по всем полям Profile
    return (_jsx("div", { className: classNames(cls.profileCard, mods, [className]), children: _jsxs("div", { className: cls.data, children: [(data === null || data === void 0 ? void 0 : data.avatar) && (_jsx("div", { className: cls.avatarWrapper, children: _jsx(Avatar, { src: data.avatar, size: 100 }) })), _jsx(Input, { value: data === null || data === void 0 ? void 0 : data.first, placeholder: t('Ваше имя'), className: cls.input, onChange: onChangeFirstname, readonly: readonly }), _jsx(Input, { value: data === null || data === void 0 ? void 0 : data.lastname, placeholder: t('Ваша фамилия'), className: cls.input, onChange: onChangeLastname, readonly: readonly }), _jsx(Input, { value: data === null || data === void 0 ? void 0 : data.age, placeholder: t('Ваш возраст'), className: cls.input, onChange: onChangeAge, readonly: readonly }), _jsx(Input, { value: data === null || data === void 0 ? void 0 : data.city, placeholder: t('Город'), className: cls.input, onChange: onChangeCity, readonly: readonly }), _jsx(Input, { value: data === null || data === void 0 ? void 0 : data.username, placeholder: t('Никнейм'), className: cls.input, onChange: onChangeUsername, readonly: readonly }), _jsx(Input, { value: data === null || data === void 0 ? void 0 : data.avatar, placeholder: t('Фото'), className: cls.input, onChange: onChangeAvatar, readonly: readonly }), _jsx(CurrencySelect, { className: cls.input, value: data === null || data === void 0 ? void 0 : data.currency, onChange: onChangeCurrency, readonly: readonly }), _jsx(CountrySelect, { className: cls.input, value: data === null || data === void 0 ? void 0 : data.country, onChange: onChangeCountry, readonly: readonly })] }) }));
};
