import React from 'react';
import {classNames} from "shared/lib/classNames";
import cls from './Navbar.module.scss';
import {AppLink} from "shared/ui/AppLink/AppLink";
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher/ui/ThemeSwitcher";

interface NavbarProps {
    className?: string;

}

export const Navbar = ({className}: NavbarProps) => {
    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <ThemeSwitcher />
            <div className={cls.links}>
                <AppLink to='/' theme={'secondary'} className={cls.mainLink}>Main page</AppLink>
                <AppLink to='/about' theme={'secondary'}>About page</AppLink>
            </div>
        </div>
    );
};

