import { AppLink } from 'shared/ui/AppLink/AppLink';
import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import { useTranslation } from 'react-i18next';
import { SidebarItemType } from '../../model/types/sidebar';
import cls from './SidebarItem.module.scss';

interface SidebarItemProps {
    item: SidebarItemType;
    collapsed: boolean;
}

export const SidebarItem = ({ item, collapsed }: SidebarItemProps) => {
    const isAuth = useSelector(getUserAuthData);
    const { t } = useTranslation();
    if (item.authOnly && !isAuth) {
        return null;
    }
    return (
        <AppLink
            theme="secondary"
            to={item.path}
            className={classNames(cls.item, { [cls.collapsed]: collapsed })}
        >
            <item.Icon className={cls.icon} />
            <span className={cls.link}>
                {t(item.text)}
            </span>
        </AppLink>
    );
};
