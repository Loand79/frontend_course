import React, { memo } from 'react';
import { ToggleFeatures } from '@/shared/lib/features';
import { SidebarRedesigned } from './SidebarRedesigned';
import { SidebarDeprecated } from './SidebarDeprecated';

export const Sidebar = memo(() => (
    <ToggleFeatures feature="isAppRedesigned" on={<SidebarRedesigned />} off={<SidebarDeprecated />} />
));
