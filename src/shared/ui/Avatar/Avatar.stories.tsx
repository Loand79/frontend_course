import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Avatar } from '../Avatar/Avatar';
import avatar from '../../assets/test/avatar.jpg';

export default {
    title: 'shared/Avatar',
    component: Avatar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Small = Template.bind({});
Small.args = {
    src: avatar,
    size: 50,
};

export const Medium = Template.bind({});
Medium.args = {
    src: avatar,
    size: 100,
};

export const Large = Template.bind({});
Large.args = {
    src: avatar,
    size: 200,
};
