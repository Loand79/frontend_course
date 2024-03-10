export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    PROFILE = 'profile',
    ARTICLES = 'articles',
    ARTICLE_DETAILS = 'article_details',
    ARTICLE_NEW = 'article_new',
    ARTICLE_EDIT = 'article_edit',
    NOT_FOUND = 'not_found',
    ADMIN_PANEL = 'admin_panel',
    FORBIDDEN = 'forbidden',
}

export const getRouteMain = () => '/';
export const getRouteAbout = () => '/about';
export const getRouteProfile = (id: string) => `/profile/${id}`;
export const getRouteArticles = () => '/articles';
export const getRouteArticleDetails = (id: string) => `/article/${id}`;
export const getRouteArticleEdit = (id: string) => `/article/${id}/edit`;
export const getRouteArticleNew = () => '/articles/new';
export const getRouteAdminPanel = () => '/admin';
export const getRouteForbidden = () => '/forbidden';
