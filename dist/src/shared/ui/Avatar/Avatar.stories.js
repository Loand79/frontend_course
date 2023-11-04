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
import { Avatar } from 'shared/ui/Avatar/Avatar';
import avatar from '../../assets/test/avatar.jpg';
export default {
    title: 'shared/Avatar',
    component: Avatar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};
var Template = function (args) { return _jsx(Avatar, __assign({}, args)); };
export var Small = Template.bind({});
Small.args = {
    src: avatar,
    size: 50,
};
export var Medium = Template.bind({});
Medium.args = {
    src: avatar,
    size: 100,
};
export var Large = Template.bind({});
Large.args = {
    src: avatar,
    size: 200,
};
