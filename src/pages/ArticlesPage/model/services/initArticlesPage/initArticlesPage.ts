import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getArticlePageInited } from '../../selectors/articlesPageSelectors';
import { articlePageActions } from '../../slices/articlesPageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

export const initArticlesPage = createAsyncThunk<
    void,
    void,
    ThunkConfig<string>
>(
    'articlesPage/initArticlesPage',
    async (props, thunkAPI) => {
        const { dispatch, getState } = thunkAPI;
        const inited = getArticlePageInited(getState());

        if (!inited) {
            dispatch(articlePageActions.initState());
            dispatch(fetchArticlesList({
                page: 1,
            }));
        }
    },
);
