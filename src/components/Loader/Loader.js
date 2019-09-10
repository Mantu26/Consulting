import React, { Fragment } from "react";
import PropTypes from 'prop-types';

//Deps
import clsx from 'clsx';

//#A1UI
import Overlay from "appRoot/components/Overlay";
import Icon from "appRoot/components/Icon";


const Loader = (props) => {
    const {
        opened = false,
        color = 'initial',
        bgColor = 'initial',
        size = 32,
        className,
        ...others
    } = props;

    const col = color !== `initial` ? color : `#3f51b5`;
    const bgCol = bgColor !== `initial` ? bgColor : `#e0e0e0`;

    return (
        <Fragment>
            <Overlay opened={opened} bgColor={bgCol} />

            <div className={
                clsx(
                    "a1_loader",
                    {
                        "opened": opened,
                        "closed": !opened,
                    },
                    className
                )}
                style={{
                    top: `calc(50% - ${size / 2}px`,
                    left: `calc(50% - ${size / 2}px`,
                }}
                {...others}
            >
                <Icon icon="refresh" size={size} className={clsx({ "a1_spin": opened })} color={col} />
            </div>
        </Fragment>
    );
};

Loader.propTypes = {
    opened: PropTypes.bool,
    color: PropTypes.string,
    bgColor: PropTypes.string,
    size: PropTypes.number,
    className: PropTypes.string,
};

export default Loader;
