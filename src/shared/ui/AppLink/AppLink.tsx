import {classNames} from "shared/lib/classNames";
import cls from './AppLink.module.scss';
import {Link, LinkProps} from "react-router-dom";
import {FC} from "react";


type AppLinkTheme = 'secondary' | 'primary'

// export enum AppLinkTheme {
//     SECONDARY = 'secondary',
//     PRIMARY = 'primary'
// }

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const {
        to,
        className,
        children,
        theme = 'primary',
        ...otherProps
    } = props

    return (
        <Link
            to={to}
            className={classNames(cls.appLink, {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </Link>
    );
};

