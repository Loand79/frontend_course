import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Text } from './Text';

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

export const SizeS = Template.bind({});
SizeS.args = {
    title: 'Title',
    text: 'Description Description Description Description Description ',
    size: 's',
};

export const SizeM = Template.bind({});
SizeM.args = {
    title: 'Title',
    text: 'Description Description Description Description Description ',
    size: 'm',
};

export const SizeL = Template.bind({});
SizeL.args = {
    title: 'Title',
    text: 'Description Description Description Description Description ',
    size: 'l',
};
