import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { loginActions } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const { username, password } = useSelector(getLoginState);

    const onChangeUserName = useCallback((value: string) => {
        dispatch(loginActions.setUserName(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);
    return (
        <div className={classNames(cls.loginForm, {}, [className])}>
            <Input
                type="text"
                className={cls.input}
                onChange={onChangeUserName}
                value={username}
            />
            <Input
                type="password"
                className={cls.input}
                onChange={onChangePassword}
                value={password}
            />
            <Button className={cls.loginBtn} theme="outline">
                {t('Войти')}
            </Button>
        </div>
    );
});
