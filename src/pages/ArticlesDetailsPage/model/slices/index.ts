import { combineReducers } from '@reduxjs/toolkit';
import { articleDetailsRecommendationsReducer } from '../slices/articleDetailsRecommendationsSlice';
import { articleDetailsCommentsReducer } from '../slices/articleDetailsCommentsSlice';
import { ArticleDetailsPageSchema } from '../types/index';

export const articleDetailsPageReducer =
    combineReducers<ArticleDetailsPageSchema>({
        recommendations: articleDetailsRecommendationsReducer,
        comments: articleDetailsCommentsReducer,
    });
