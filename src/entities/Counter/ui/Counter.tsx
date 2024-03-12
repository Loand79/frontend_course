import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Button } from '@/shared/ui/Button';
import { useCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { useCounterActions } from '../model/slice/counterSlice';

export const Counter = () => {
    const dispatch = useDispatch();
    const counterValue = useCounterValue();
    const { t } = useTranslation();
    const { increment, add, decrement } = useCounterActions();

    const handleInc = () => {
        increment();
    };

    const handleDec = () => {
        decrement();
    };

    const handleAdd = () => {
        add(5);
    };

    return (
        <div>
            <h1 data-testid="value-title">
                {counterValue}
            </h1>
            <Button onClick={handleInc} data-testid="increment-btn">{t('increment')}</Button>
            <Button onClick={handleDec} data-testid="decrement-btn">{t('decrement')}</Button>
            <Button onClick={handleAdd} data-testid="decrement-btn">{t('add five')}</Button>
        </div>
    );
};
