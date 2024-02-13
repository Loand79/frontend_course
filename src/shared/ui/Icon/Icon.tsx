import { FunctionComponent, memo, SVGAttributes } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Icon.module.scss';

interface IconProps extends SVGAttributes<SVGElement> {
    className?: string;
    Svg: FunctionComponent<SVGAttributes<SVGElement>>;
    inverted?: boolean;
}

export const Icon = memo(({
    className, Svg, inverted, ...otherProps 
}: IconProps) => (
    <Svg
        className={classNames(inverted ? cls.inverted : cls.Icon, {}, [className])}
        {...otherProps}
    />
));
