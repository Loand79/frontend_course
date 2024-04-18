import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { SortOrder } from '@/shared/types';
import { ArticleSortField, ArticleType } from '@/entities/Article';
import { getArticlePageInited } from '../../selectors/articlesPageSelectors';
import { articlePageActions } from '../../slices/articlesPageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

export const initArticlesPage = createAsyncThunk<
    void,
    URLSearchParams,
    ThunkConfig<string>
>('articlesPage/initArticlesPage', async (searchParams, thunkAPI) => {
    const { dispatch, getState } = thunkAPI;
    const inited = getArticlePageInited(getState());

    if (!inited) {
        const orderFromURL = searchParams.get('order') as SortOrder;
        const sortFromURL = searchParams.get('sort') as ArticleSortField;
        const searchFromURL = searchParams.get('search');
        const typeFromURL = searchParams.get('type') as ArticleType;

        if (orderFromURL) {
            dispatch(articlePageActions.setOrder(orderFromURL));
        }

        if (sortFromURL) {
            dispatch(articlePageActions.setSort(sortFromURL));
        }

        if (searchFromURL) {
            dispatch(articlePageActions.setSearch(searchFromURL));
        }

        if (typeFromURL) {
            dispatch(articlePageActions.setType(typeFromURL));
        }

        dispatch(articlePageActions.initState());
        dispatch(fetchArticlesList({}));
    }
});
