import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Flex } from './Flex';

export default {
    title: 'shared/Flex',
    component: Flex,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Flex>;

const Template: ComponentStory<typeof Flex> = (args) => <Flex {...args} />;

export const Row = Template.bind({});
Row.args = {
    children: (
        <>
            <div>123</div>
            <div>123</div>
            <div>123</div>
            <div>123</div>
        </>
    ),
};

export const Column = Template.bind({});
Column.args = {
    direction: 'column',
    children: (
        <>
            <div>123</div>
            <div>123</div>
            <div>123</div>
            <div>123</div>
        </>
    ),
};

export const RowGap8 = Template.bind({});
RowGap8.args = {
    gap: '8',
    children: (
        <>
            <div>123</div>
            <div>123</div>
            <div>123</div>
            <div>123</div>
        </>
    ),
};

export const RowGap12 = Template.bind({});
RowGap12.args = {
    gap: '12',
    children: (
        <>
            <div>123</div>
            <div>123</div>
            <div>123</div>
            <div>123</div>
        </>
    ),
};

export const RowGap16 = Template.bind({});
RowGap16.args = {
    gap: '16',
    children: (
        <>
            <div>123</div>
            <div>123</div>
            <div>123</div>
            <div>123</div>
        </>
    ),
};

export const ColumnGap8 = Template.bind({});
ColumnGap8.args = {
    gap: '8',
    direction: 'column',
    children: (
        <>
            <div>123</div>
            <div>123</div>
            <div>123</div>
            <div>123</div>
        </>
    ),
};

export const ColumnGap12 = Template.bind({});
ColumnGap12.args = {
    gap: '12',
    direction: 'column',
    children: (
        <>
            <div>123</div>
            <div>123</div>
            <div>123</div>
            <div>123</div>
        </>
    ),
};

export const ColumnGap16 = Template.bind({});
ColumnGap16.args = {
    gap: '16',
    direction: 'column',
    children: (
        <>
            <div>123</div>
            <div>123</div>
            <div>123</div>
            <div>123</div>
        </>
    ),
};
