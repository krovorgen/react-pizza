import React, { FC } from 'react';
import classNames from 'classnames';

interface IButtonProps {
    outline?: boolean
}

const Button: FC<IButtonProps> = ({children, outline}) => {
    const classNamesList = {
        'button--outline': outline
    }

    return (
        <button className={classNames('button', classNamesList)}>{children}</button>
    );
};

export default Button;
