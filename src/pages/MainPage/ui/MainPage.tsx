import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/providers/ErrorBoundary';
import { Input } from 'shared/ui/Input/Input';

const MainPage = () => {
    const { t } = useTranslation('main');
    const [value, setValue] = useState('');
    return (
        <div>
            <BugButton />
            {t('Главная страница')}
            <Input value={value} onChange={(value) => setValue(value)} />
        </div>
    );
};

export default MainPage;
