import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { Button } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import { getProfileReadonly, profileActions, updateProfileData } from 'entities/Profile';
import { useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import cls from './ProfilePageHeader.module.scss';
export var ProfilePageHeader = function (_a) {
    var className = _a.className;
    var t = useTranslation('profile').t;
    var readonly = useSelector(getProfileReadonly);
    var dispatch = useAppDispatch();
    var onEdit = useCallback(function () {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);
    var onCancelEdit = useCallback(function () {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);
    var onSave = useCallback(function () {
        dispatch(updateProfileData());
    }, [dispatch]);
    return (_jsxs("div", { className: classNames(cls.profilePageHeader, {}, [className]), children: [_jsx(Text, { title: t('Профиль') }), readonly ? (_jsx(Button, { theme: "outline", className: cls.editBtn, onClick: onEdit, children: t('Редактировать') }))
                : (_jsxs(_Fragment, { children: [_jsx(Button, { theme: "outline_red", className: cls.editBtn, onClick: onCancelEdit, children: t('Отменить') }), _jsx(Button, { theme: "outline", className: cls.saveBtn, onClick: onSave, children: t('Сохранить') })] }))] }));
};
