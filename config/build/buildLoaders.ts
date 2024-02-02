import webpack from 'webpack';
import type { BuildOptions } from './types/config';
import { buildCssLoader } from './loaders/buildCssLoader';
import { buildBabelLoader } from './loaders/buildBabelLoader';

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
    // Если не используется typescript - нужен babel-loader
    const { isDev } = options;
    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    };
    const fileLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        type: 'asset/resource',
    };

    const codeBabelLoader = buildBabelLoader({ ...options, isTsx: false });
    const tsxBabelLoader = buildBabelLoader({ ...options, isTsx: true });

    // const typescriptLoader = {
    //     test: /\.tsx?$/,
    //     use: 'ts-loader',
    //     exclude: /node_modules/,
    // };
    const scssLoader = buildCssLoader(isDev);

    return [
        fileLoader, svgLoader, codeBabelLoader, tsxBabelLoader, scssLoader,
    ];
}
