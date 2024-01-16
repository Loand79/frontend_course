import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileReadonly } from '../getProfileReadonly/getProfileReadonly';

describe('getProfileReadonly', () => {
    test('should return true', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                readonly: true,
            },
        };
        expect(getProfileReadonly(state as StateSchema)).toEqual(true);
    });
    test('should return undefined with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileReadonly(state as StateSchema)).toEqual(undefined);
    });
});
