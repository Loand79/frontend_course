import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;

}

export function Navbar({ className }: NavbarProps) {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink to="/" theme="secondary" className={cls.mainLink}>{t('Основная страница')}</AppLink>
                <AppLink to="/about" theme="secondary">{t('О нас')}</AppLink>
            </div>
        </div>
    );
}
