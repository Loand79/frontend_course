import React from 'react';
import {classNames} from "shared/lib/classNames";
import cls from './Navbar.module.scss';
import {AppLink} from "shared/ui/AppLink";

interface NavbarProps {
    className?: string;

}

export const Navbar = ({className}: NavbarProps) => {
    return (
        <div className={classNames(cls.navbar)}>
            <div className={cls.links}>
                <AppLink to='/' theme={'secondary'} className={cls.mainLink}>Main page</AppLink>
                <AppLink to='/about' theme={'secondary'}>About page</AppLink>
            </div>
        </div>
    );
};

