import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { AppLink } from './AppLink';

export default {
    title: 'shared/AppLink',
    component: AppLink,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
    },
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'text',
    theme: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
    children: 'text',
    theme: 'secondary',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    children: 'text',
    theme: 'primary',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SecondaryDark = Template.bind({});
SecondaryDark.args = {
    children: 'text',
    theme: 'secondary',
};

SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)];
