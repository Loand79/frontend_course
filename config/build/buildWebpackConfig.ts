import webpack from "webpack";

import type {BuildOptions} from "./types/config";

import {buildPlugin} from "./buildPlugin";
import {buildLoaders} from "./buildLoaders";
import {buildResolvers} from "./buildResolvers";

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {

    const {paths, mode} = options

    return {
        mode,  // можно указать еще development
        entry: {
            random_build: paths.entry, //ключ - название создаваемго файла, значение - путь
        },
        output: {
            filename: "[name].js", // можно указать "[name].[contenthash].js" и тогда к имени файла добавится уникальный ключ
            path: paths.build,
            clean: true, // убирает лишние файлы при сборке
        },
        plugins: buildPlugin(options), // возвращаем массив плагинов из функции
        module: {
            rules: buildLoaders(),
        },
        resolve: buildResolvers(),
    }
}