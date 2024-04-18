import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { NotificationItem } from './NotificationItem';

export default {
    title: 'entities/Notification/NotificationItem',
    component: NotificationItem,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof NotificationItem>;

const Template: ComponentStory<typeof NotificationItem> = (args) => (
    <NotificationItem {...args} />
);

export const WithLink = Template.bind({});
WithLink.args = {
    item: {
        id: '1',
        description: 'Hello is new notification item',
        title: 'Notification',
        href: 'https://ya.ru',
    },
};

export const WithoutLink = Template.bind({});
WithoutLink.args = {
    item: {
        id: '1',
        description: 'Hello is new notification item',
        title: 'Notification',
    },
};
