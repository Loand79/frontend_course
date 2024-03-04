import { RouteProps } from 'react-router-dom';
// eslint-disable-next-line lo-and-plugin/layer-imports
import { UserRole } from '@/entities/User';

export type AppRouteProps = RouteProps & {
    authOnly?: boolean;
    role?: UserRole[];
}
