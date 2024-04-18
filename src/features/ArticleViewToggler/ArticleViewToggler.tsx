import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import ListIcon from '@/shared/assets/icons/list.svg?react';
import TiledIcon from '@/shared/assets/icons/tiled.svg?react';
import { Button } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';
import { ArticleView } from '../../entities/Article/model/consts/articleEnums';
import cls from './ArticleViewToggler.module.scss';

interface ArticleViewTogglerProps {
    className?: string;
    view: ArticleView;
    onViewClick?: (view: ArticleView) => void;
}

const viewTypes = [
    {
        view: ArticleView.SMALL,
        icon: ListIcon,
    },
    {
        view: ArticleView.BIG,
        icon: TiledIcon,
    },
];

export const ArticleViewToggler = memo((props: ArticleViewTogglerProps) => {
    const { className, view, onViewClick } = props;

    const onClick = (newView: ArticleView) => () => {
        onViewClick?.(newView);
    };

    return (
        <div className={classNames(cls.ArticleViewToggler, {}, [className])}>
            {viewTypes.map((viewType) => (
                <Button
                    key={viewType.view}
                    theme="clear"
                    onClick={onClick(viewType.view)}
                >
                    <Icon
                        Svg={viewType.icon}
                        className={classNames('', {
                            [cls.selected]: viewType.view === view,
                        })}
                    />
                </Button>
            ))}
        </div>
    );
});
