import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import CopyIcon from 'shared/assets/icons/copy.svg';
import { Button } from '../Button/Button';
import cls from './Code.module.scss';

interface CodeProps {
    className?: string;
    codeText: string;
}

export const Code = memo(({ className, codeText }: CodeProps) => {
    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(codeText);
    }, [codeText]);

    return (
        <pre className={classNames(cls.Code, {}, [className])}>
            <Button onClick={onCopy} className={cls.copyBtn} theme="clear">
                <CopyIcon className={cls.copyIcon} />
            </Button>
            <code>
                {codeText}
            </code>
        </pre>
    );
});
