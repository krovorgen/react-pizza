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
    appearance?: AppearancesType;
}

const Button: FC<IButtonProps & AppearancesType> = ({
    children,
    addClass,
    onClick,
    ...appearance
}) => {
    const classNamesList = {
        'button--outline': appearance.outline,
        'button--cart': appearance.cart,
        'button--add': appearance.add,
        'button--circle': appearance.circle,
        'button--black': appearance.black,
    };

    return (
        <button onClick={onClick} className={classNames('button', addClass, classNamesList)}>
            {children}
        </button>
    );
};

export default Button;
