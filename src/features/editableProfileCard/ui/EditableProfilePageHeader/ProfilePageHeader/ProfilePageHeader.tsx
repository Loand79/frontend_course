import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useCallback } from 'react';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/deprecated/Text';
import { Button } from '@/shared/ui/deprecated/Button';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getUserAuthData } from '@/entities/User';
import { getProfileData } from '../../../model/selectors/getProfileData/getProfileData';
import { getProfileReadonly } from '../../../model/selectors/getProfileReadonly/getProfileReadonly';
import { profileActions } from '../../../model/slice/profileSlice';
import { updateProfileData } from '../../../model/services/updateProfileData/updateProfileData';

interface ProfilePageHeaderProps {
    className?: string;
}

export const EditableProfilePageHeader = ({ className }: ProfilePageHeaderProps) => {
    const { t } = useTranslation('profile');
    const authData = useSelector(getUserAuthData);
    const profileData = useSelector(getProfileData);
    const canEdit = authData?.id === profileData?.id;

    const readonly = useSelector(getProfileReadonly);
    const dispatch = useAppDispatch();

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSave = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    return (
        <HStack max justify="between" className={classNames('', {}, [className])}>
            <Text title={t('Профиль')} />
            {canEdit && (
                <div>
                    {readonly ? (
                        <Button theme="outline" onClick={onEdit}>
                            {t('Редактировать')}
                        </Button>
                    ) : (
                        <HStack gap="8">
                            <Button theme="outline_red" onClick={onCancelEdit}>
                                {t('Отменить')}
                            </Button>
                            <Button theme="outline" onClick={onSave}>
                                {t('Сохранить')}
                            </Button>
                        </HStack>
                    )}
                </div>
            )}
        </HStack>
    );
};
