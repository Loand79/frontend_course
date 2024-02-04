import { classNames } from 'shared/lib/classNames/classNames';
import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import Bell from 'shared/assets/icons/bell.svg';
import { NotificationList } from 'entities/Notification';
import { Popover } from 'shared/ui/Popups';
import cls from './NotificationButton.module.scss';

interface NotificationButtonProps {
    className?: string;
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
    const { className } = props;

    return (
        <Popover
            className={classNames(cls.NotificationButton, {}, [className])}
            direction="bottom left"
            trigger={(
                <Button theme="clear">
                    <Icon Svg={Bell} inverted />
                </Button>
            )}
        >
            <NotificationList className={cls.notifications} />
        </Popover>
    );
});
