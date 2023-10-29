import { classNames } from 'shared/lib/classNames/classNames';
import { useSelector } from 'react-redux';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { getProfileData } from '../model/selectors/getProfileData/getProfileData';
import { getProfileError } from '../model/selectors/getProfileError/getProfileError';
import { getProfileIsLoading } from '../model/selectors/getProfileIsLoading/getProfileIsLoading';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string;
}

export const ProfileCard = ({ className }: ProfileCardProps) => {
    const { t } = useTranslation('profile');
    const data = useSelector(getProfileData);
    const error = useSelector(getProfileError);
    const isLoading = useSelector(getProfileIsLoading);
    return (
        <div className={classNames(cls.profileCard, {}, [className])}>
            <div className={cls.header}>
                <Text title={t('Профиль')} />
                <Button theme="outline" className={cls.editBtn}>
                    {t('Редактировать')}
                </Button>
            </div>
            <div className={cls.data}>
                <Input
                    value={data?.first}
                    placeholder={t('Ваше имя')}
                    className={cls.input}
                />
                <Input
                    value={data?.lastname}
                    placeholder={t('Ваша фамилия')}
                    className={cls.input}
                />

            </div>
        </div>
    );
};
