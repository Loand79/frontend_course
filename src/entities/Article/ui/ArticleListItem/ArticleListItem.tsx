import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { AppImage } from '@/shared/ui/redesigned/AppImage';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/deprecated/Text';
import { Icon } from '@/shared/ui/deprecated/Icon';
import EyeIcon from '@/shared/assets/icons/eye.svg?react';
import { Card } from '@/shared/ui/deprecated/Card';
import { Avatar } from '@/shared/ui/deprecated/Avatar';
import { Button } from '@/shared/ui/deprecated/Button';
import { AppLink } from '@/shared/ui/deprecated/AppLink';
import { ArticleBlockType, ArticleView } from '../../model/consts/articleEnums';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { Article, ArticleTextBlock } from '../../model/types/article';
import cls from './ArticleListItem.module.scss';
import { getRouteArticleDetails } from '@/shared/const/router';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';

interface ArticleListItemProps {
    className?: string;
    article: Article;
    view: ArticleView;
    target?: HTMLAnchorElement;
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
    const { className, view, article, target } = props;

    const { t } = useTranslation('article');

    const types = <Text text={article.type.join(', ')} className={cls.types} />;
    const views = (
        <>
            <Icon Svg={EyeIcon} className={cls.icon} />
            <Text text={String(article.views)} className={cls.views} />
        </>
    );

    if (view === ArticleView.BIG) {
        const textBlock = article.blocks.find((block) => block.type === ArticleBlockType.TEXT) as ArticleTextBlock;
        return (
            <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
                <Card className={cls.card}>
                    <div className={cls.header}>
                        <Avatar size={30} src={article.user.avatar} />
                        <Text text={article.user.username} className={cls.username} />
                        <Text text={article.createdAt} className={cls.date} />
                    </div>
                    <Text title={article.title} className={cls.title} />
                    {types}
                    <AppImage
                        fallback={<Skeleton width="100%" height={250} />}
                        src={article.img}
                        alt={article.title}
                        className={cls.image}
                    />
                    {textBlock && <ArticleTextBlockComponent block={textBlock} className={cls.textBlock} />}
                    <div className={cls.footer}>
                        <AppLink to={getRouteArticleDetails(article.id)}>
                            <Button>{t('Читать далее...')}</Button>
                        </AppLink>
                        {views}
                    </div>
                </Card>
            </div>
        );
    }
    return (
        <AppLink
            target="_blank"
            to={getRouteArticleDetails(article.id)}
            className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
        >
            <Card className={cls.card}>
                <div className={cls.imgWrapper}>
                    <AppImage
                        fallback={<Skeleton width="200" height={200} />}
                        src={article.img}
                        alt={article.title}
                        className={cls.img}
                    />
                    <Text text={article.createdAt} className={cls.date} />
                </div>
                <div className={cls.infoWrapper}>
                    {types}
                    {views}
                </div>
                <Text text={article.title} className={cls.title} />
            </Card>
        </AppLink>
    );
});
