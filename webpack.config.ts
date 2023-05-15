import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from "html-webpack-plugin";


const config: webpack.Configuration = {
    mode: "production", // можно указать еще development
    entry: {
        random_build: path.resolve(__dirname, 'src', 'index.ts'), //ключ - название создаваемго файла, значение - путь
    },
    output: {
        filename: "[name].js", // можно указать "[name].[contenthash].js" и тогда к имени файла добавится уникальный ключ
        path: path.resolve(__dirname, 'build'),
        clean: true, // убирает лишние файлы при сборке
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
        }),
        new webpack.ProgressPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'], // указываем расширения файлов для которых его не нужно писать в импорте
    },
}


export default config;