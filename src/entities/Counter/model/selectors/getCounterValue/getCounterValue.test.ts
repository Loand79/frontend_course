import { StateSchema } from '@/app/providers/StoreProvider';
import { getCounterValue } from './getCounterValue';

describe('getCounterValue', () => {
    test('should get only counter value', () => {
        const state: DeepPartial<StateSchema> = {
            counter: {
                value: 0,
            },
        };
        expect(getCounterValue(state as StateSchema)).toEqual(0);
    });
});
