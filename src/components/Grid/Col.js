import React from 'react';
import PropTypes from 'prop-types';


//Deps
import clsx from 'clsx';

//isRest class is a powerful and flexible class that will use what's left of the grid column.
//isRest must always be the last element

const Col = (props) => {
    const {
        size = 12,
        isRest = false,
        bgColor = 'initial',
        children,
        className,
        ...others
    } = props;

    const style = {};
    if (!isRest) {
        style.width = `${(Number(size) === 12) ? '100' : (Number(size) * 8.33333)}%`;
    }
    if (bgColor !== 'initial') {
        style.background = `${bgColor}`;
    }

    return (
        <div className={
            clsx(
                {
                    'a1_col': !isRest,
                    'a1_rest': isRest,
                },
                className
            )}
            style={style}
            {...others}
        >

            {children}
        </div>
    );
};

Col.propTypes = {
    size: PropTypes.number,
    isRest: PropTypes.bool,
    bgColor: PropTypes.string,
    children: PropTypes.node.isRequired,
    className: PropTypes.string
};

export default Col;
