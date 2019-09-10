import React from 'react';
import PropTypes from 'prop-types';

//Deps
import clsx from 'clsx';


const Row = (props) => {
    const {
        children,
        className,
        ...others
    } = props;

    return (
        <div
            className={clsx('a1_row', className)}
            {...others}
        >
            {children}
        </div>
    );
};

Row.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string
};


export default Row;
