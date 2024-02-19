import { RouteProps } from 'react-router-dom';
import { UserRole } from '@/entities/User';

export type AppRouteProps = RouteProps & {
    authOnly?: boolean;
    role?: UserRole[];
}
