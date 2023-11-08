import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Text, TextSize } from './Text';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: 'Title',
    text: 'Description Description Description Description Description ',
};

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
    title: 'Title',
};

export const OnlyText = Template.bind({});
OnlyText.args = {
    text: 'Description Description Description Description Description ',
};

export const SizeM = Template.bind({});
SizeM.args = {
    title: 'Title',
    text: 'Description Description Description Description Description ',
    size: TextSize.M,
};

export const SizeL = Template.bind({});
SizeL.args = {
    title: 'Title',
    text: 'Description Description Description Description Description ',
    size: TextSize.L,
};
