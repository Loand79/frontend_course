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
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import ProfilePage from './ProfilePage';
export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};
var Template = function (args) { return _jsx(ProfilePage, __assign({}, args)); };
export var Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator({
        profile: {
            form: {
                username: 'admin',
                age: 22,
                country: Country.Russia,
                lastname: 'nigga',
                first: 'pog',
                city: 'Moscow',
                currency: Currency.RUB,
            },
        },
    })];
export var Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [StoreDecorator({
        profile: {
            form: {
                username: 'admin',
                age: 22,
                country: Country.Russia,
                lastname: 'nigga',
                first: 'pog',
                city: 'Moscow',
                currency: Currency.RUB,
            },
        },
    }), ThemeDecorator(Theme.DARK)];
