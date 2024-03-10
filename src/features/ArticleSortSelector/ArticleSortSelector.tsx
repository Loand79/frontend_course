import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Select, SelectOption } from '@/shared/ui/Select';
import { SortOrder } from '@/shared/types';
import { ArticleSortField } from '../../entities/Article/model/consts/articleEnums';
import cls from './ArticleSortSelector.module.scss';

interface ArticleSortSelectorProps {
    className?: string;
    sort: ArticleSortField;
    order: SortOrder;
    onChangOrder: (newOrder: SortOrder) => void;
    onChangSort: (newSort: ArticleSortField) => void;
}

export const ArticleSortSelector = memo((props: ArticleSortSelectorProps) => {
    const {
        className, sort, order, onChangSort, onChangOrder,
    } = props;

    const { t } = useTranslation();
    const orderOptions = useMemo<SelectOption<SortOrder>[]>(() => [
        {
            value: 'asc',
            content: t('возрастанию'),

        },
        {
            value: 'desc',
            content: t('убыванию'),

        },

    ], [t]);

    const sortOptions = useMemo<SelectOption<ArticleSortField>[]>(() => [
        {
            value: ArticleSortField.TITLE,
            content: t('названию'),

        },
        {
            value: ArticleSortField.VIEWS,
            content: t('просмотрам'),

        },
        {
            value: ArticleSortField.CREATED,
            content: t('дате создания'),

        },

    ], [t]);
    // ПЛОХОЙ ВАРИАНТ ПРИВЕДЕНИЯ ТИПОВ
    // const changeSortHandler = useCallback((newSort: string) => {
    //     onChangSort(newSort as ArticleSortField);
    // }, [onChangSort]);
    //
    // const changeOrderHandler = useCallback((newOrder: string) => {
    //     onChangOrder(newOrder as SortOrder);
    // }, [onChangOrder]);

    return (
        <div className={classNames(cls.ArticleSortSelector, {}, [className])}>
            <Select<ArticleSortField>
                options={sortOptions}
                label={t('Сортировать по')}
                value={sort}
                onChange={onChangSort}
            />
            <Select
                options={orderOptions}
                label={t('По')}
                value={order}
                onChange={onChangOrder}
                className={cls.order}
            />
        </div>
    );
});
