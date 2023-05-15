import webpack, {ResolveOptions} from "webpack";

export function buildResolvers(): ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js'], // указываем расширения файлов для которых его не нужно писать в импорте
    }
}