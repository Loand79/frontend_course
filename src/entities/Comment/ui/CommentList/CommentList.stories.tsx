import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CommentList } from './CommentList';

export default {
    title: 'entities/Comment/CommentList',
    component: CommentList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    comments: [
        {
            id: '1',
            text: 'hello',
            user: {
                id: '1',
                username: 'vasya pupkin',
            },
        },
        {
            id: '2',
            text: 'hello',
            user: {
                id: '1',
                username: 'vasya pupkin',
            },
        },
        {
            id: '3',
            text: 'hello',
            user: {
                id: '1',
                username: 'vasya pupkin',
            },
        },
    ],

};

export const Loading = Template.bind({});
Loading.args = {
    comments: [],
    isLoading: true,
};