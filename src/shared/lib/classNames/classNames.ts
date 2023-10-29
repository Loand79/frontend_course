export type Modifiers = Record<string, boolean | string | undefined>

export function classNames(
    cls: string,
    modifiers: Modifiers = {},
    additional: Array<string | undefined> = [],
): string {
    return [
        cls,
        ...additional.filter(Boolean),
        ...Object.entries(modifiers)
            .filter(([className, value]) => Boolean(value))
            .map(([className]) => className),
    ].join(' ');
}
