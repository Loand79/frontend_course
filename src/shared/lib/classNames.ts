type Modifiers = Record<string, boolean | string>

export function classNames(cls: string, modifiers: Modifiers = {}, additional: string[] = []): string {
    return [
        cls,
        ...additional.filter(Boolean),
        ...Object.entries(modifiers)
            .filter(([className, value]) => Boolean(value))
            .map(([className]) => className),
    ].join(' ');
}
