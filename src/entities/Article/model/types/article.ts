export enum ArticleBlockType {
    CODE = 'CODE',
    TEXT = 'TEXT',
    IMAGE = 'IMAGE',
}

export interface ArticleBaseBlock {
    id: string;
    type: ArticleBlockType;
}

export enum ArticleType {
    IT = 'IT',
    SCIENCE = 'SCIENCE',
    ECONOMICS = 'ECONOMICS'
}

export interface ArticleCodeBlock extends ArticleBaseBlock {
    type: ArticleBlockType.CODE;
    code: string;
}

export interface ArticleImageBlock extends ArticleBaseBlock {
    type: ArticleBlockType.IMAGE;
    src: string;
    title?: string;
}

export interface ArticleTextBlock extends ArticleBaseBlock {
    type: ArticleBlockType.TEXT;
    title: string;
    paragraphs: string[];
}

export type ArticleBlock = ArticleTextBlock | ArticleImageBlock | ArticleCodeBlock;

export interface Article {
    id: string;
    title: string;
    subtitle: string;
    img: string;
    views: number,
    createdAt: string;
    type: ArticleType[],
    blocks: ArticleBlock[];
}
