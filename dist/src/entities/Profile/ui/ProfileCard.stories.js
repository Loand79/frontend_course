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
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import avatar from 'shared/assets/test/avatar.jpg';
import { ProfileCard } from './ProfileCard';
export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};
var Template = function (args) { return _jsx(ProfileCard, __assign({}, args)); };
export var Primary = Template.bind({});
Primary.args = {
    data: {
        username: 'admin',
        age: 22,
        country: Country.Russia,
        lastname: 'nigga',
        first: 'pog',
        city: 'Moscow',
        currency: Currency.RUB,
        avatar: avatar,
    },
};
export var WithError = Template.bind({});
WithError.args = {
    error: 'error',
};
export var Loading = Template.bind({});
Loading.args = {
    isLoading: true,
};
