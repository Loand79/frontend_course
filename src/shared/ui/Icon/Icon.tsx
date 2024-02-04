import { classNames } from 'shared/lib/classNames/classNames';
import { FunctionComponent, memo, SVGAttributes } from 'react';
import cls from './Icon.module.scss';

interface IconProps {
    className?: string;
    Svg: FunctionComponent<SVGAttributes<SVGElement>>;
    inverted?: boolean;
}

export const Icon = memo(({ className, Svg, inverted }: IconProps) => (
    <Svg className={classNames(inverted ? cls.inverted : cls.Icon, {}, [className])} />
));
