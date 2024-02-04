import { DropdownDirection } from '../../../types/ui';
import cls from './popups.module.scss';

export const mapDirection: Record<DropdownDirection, string> = {
    'top right': cls.optionsTopRight,
    'bottom right': cls.optionsBottomRight,
    'top left': cls.optionsTopLeft,
    'bottom left': cls.optionsBottomLeft,
};
