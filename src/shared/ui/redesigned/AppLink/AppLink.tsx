import { Link, LinkProps } from 'react-router-dom';
import { memo, ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './AppLink.module.scss';

type AppLinkVariant = 'secondary' | 'primary';

interface AppLinkProps extends LinkProps {
    className?: string;
    variant?: AppLinkVariant;
    children?: ReactNode;
}

export const AppLink = memo((props: AppLinkProps) => {
    const { to, className, children, variant = 'primary', ...otherProps } = props;

    return (
        <Link to={to} className={classNames(cls.appLink, {}, [className, cls[variant]])} {...otherProps}>
            {children}
        </Link>
    );
});
