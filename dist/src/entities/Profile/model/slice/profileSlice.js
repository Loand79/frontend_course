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
import { createSlice } from '@reduxjs/toolkit';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData';
var initialState = {
    data: undefined,
    form: undefined,
    error: undefined,
    isLoading: false,
    readonly: true,
};
export var profileSlice = createSlice({
    name: 'Profile',
    initialState: initialState,
    reducers: {
        setReadonly: function (state, action) {
            state.readonly = action.payload;
        },
        cancelEdit: function (state) {
            state.readonly = true;
            state.form = state.data;
            state.validateErrors = undefined;
        },
        updateProfile: function (state, action) {
            state.form = __assign(__assign({}, state.form), action.payload);
        },
    },
    extraReducers: function (builder) {
        builder
            .addCase(fetchProfileData.pending, function (state) {
            state.validateErrors = undefined;
            state.isLoading = true;
        })
            .addCase(fetchProfileData.fulfilled, function (state, action) {
            state.isLoading = false;
            state.data = action.payload;
            state.form = action.payload;
        })
            .addCase(fetchProfileData.rejected, function (state, action) {
            state.isLoading = false;
            state.error = action.payload;
        })
            .addCase(updateProfileData.pending, function (state) {
            state.validateErrors = undefined;
            state.isLoading = true;
        })
            .addCase(updateProfileData.fulfilled, function (state, action) {
            state.isLoading = false;
            state.data = action.payload;
            state.form = action.payload;
            state.readonly = true;
            state.validateErrors = undefined;
        })
            .addCase(updateProfileData.rejected, function (state, action) {
            state.isLoading = false;
            state.validateErrors = action.payload;
        });
    },
});
export var profileActions = profileSlice.actions;
export var profileReducer = profileSlice.reducer;
