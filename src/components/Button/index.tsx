import React, { FC } from 'react';
import classNames from 'classnames';

type AppearancesType = {
    outline?: boolean;
    cart?: boolean;
    add?: boolean;
    circle?: boolean;
    black?: boolean;
};

interface IButtonProps {
    onClick?: () => void;
    addClass?: string;
}

const Button: FC<IButtonProps & AppearancesType> = ({
    children,
    addClass,
    outline,
    onClick,
    cart,
    add,
    black,
    circle,
}) => {
    const classNamesList = {
        'button--outline': outline,
        'button--cart': cart,
        'button--add': add,
        'button--circle': circle,
        'button--black': black,
    };

    return (
        <button onClick={onClick} className={classNames('button', addClass, classNamesList)}>
            {children}
        </button>
    );
};

export default Button;
