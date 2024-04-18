import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ListBox } from './ListBox';

export default {
    title: 'shared/ListBox',
    component: ListBox,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        (Story) => (
            <div style={{ padding: 100 }}>
                <Story />
            </div>
        ),
    ],
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => (
    <ListBox {...args} onChange={() => {}} />
);

export const Normal = Template.bind({});
Normal.args = {
    value: 'big',
    items: [
        { content: 'lorem12asdasdasd', value: '12344' },
        { content: 'lorem12asdasdasd', value: '12344' },
        { content: 'lorem12asdasdasd', value: '12344' },
    ],
};

export const TopLeft = Template.bind({});
TopLeft.args = {
    direction: 'top left',
    value: 'big',
    items: [
        { content: 'lorem12asdasdasd', value: '12344' },
        { content: 'lorem12asdasdasd', value: '12344' },
        { content: 'lorem12asdasdasd', value: '12344' },
    ],
};

export const TopRight = Template.bind({});
TopRight.args = {
    direction: 'top right',
    value: 'big',
    items: [
        { content: 'lorem12asdasdasd', value: '12344' },
        { content: 'lorem12asdasdasd', value: '12344' },
        { content: 'lorem12asdasdasd', value: '12344' },
    ],
};

export const BottomRight = Template.bind({});
BottomRight.args = {
    direction: 'bottom right',
    value: 'big',
    items: [
        { content: 'lorem12asdasdasd', value: '12344' },
        { content: 'lorem12asdasdasd', value: '12344' },
        { content: '12lorem12asdasdasd3', value: '12344' },
    ],
};

export const BottomLeft = Template.bind({});
BottomLeft.args = {
    direction: 'bottom left',
    value: 'big',
    items: [
        { content: 'lorem12asdasdasd', value: '12344' },
        { content: 'lorem12asdasdasd', value: '12344' },
        { content: 'lorem12asdasdasd', value: '12344' },
    ],
};
