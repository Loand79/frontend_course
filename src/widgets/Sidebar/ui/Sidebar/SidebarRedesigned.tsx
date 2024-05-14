import React, { memo, useState } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/deprecated/Button';
import { VStack } from '@/shared/ui/deprecated/Stack';
import { SidebarItem } from '../../ui/SidebarItem/SidebarItem';
import cls from './Sidebar.module.scss';
import { getSidebarItems } from '../../model/selectors/getSidebarItems';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { LangSwitcher } from '@/features/LangSwitcher';

interface SidebarProps {
    className?: string;
}

export const SidebarRedesigned = memo(({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const sidebarItemsList = useSelector(getSidebarItems);
    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <aside
            data-testid="sidebar"
            className={classNames(cls.sidebarRedesign, { [cls.collapsed]: collapsed }, [className])}
        >
            <Button
                data-testid="sidebar-toggle"
                onClick={onToggle}
                className={cls.collapsedBtn}
                theme="backgroundInverted"
                square
                size="size_l"
            >
                {collapsed ? '>' : '<'}
            </Button>

            <VStack role="navigation" gap="8" className={cls.items}>
                {sidebarItemsList.map((item) => (
                    <SidebarItem item={item} collapsed={collapsed} key={item.path} />
                ))}
            </VStack>

            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher short={collapsed} className={cls.lang} />
            </div>
        </aside>
    );
});
