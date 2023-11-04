var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import { Text } from './Text';
export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};
var Template = function (args) { return _jsx(Text, __assign({}, args)); };
export var Primary = Template.bind({});
Primary.args = {
    title: 'Title',
    text: 'Description Description Description Description Description ',
};
export var OnlyTitle = Template.bind({});
OnlyTitle.args = {
    title: 'Title',
};
export var OnlyText = Template.bind({});
OnlyText.args = {
    text: 'Description Description Description Description Description ',
};
