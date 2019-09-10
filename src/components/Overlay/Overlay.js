import React, { useEffect } from "react";
import PropTypes from 'prop-types';

//Deps
import clsx from 'clsx';



const Overlay = (props) => {
    const {
        opened = false,
        bgColor = 'initial',
        onClose = () => { },
        className,
        ...others
    } = props;




    useEffect(() => {
        const rootTag = document.getElementsByTagName("html")[0];
        if (opened) {
            rootTag.style.overflow = "hidden";
        } else {
            rootTag.style.overflow = null;
        }

        return function cleanup() {
            rootTag.style.overflow = null;
        };
    }, [opened]);


    return (
        <div className={
            clsx(
                'a1_overlay',
                {
                    'opened': opened,
                    'closed': !opened,
                },
                className,
            )}

            style={{
                background: `${bgColor !== "initial" ? bgColor : "#e0e0e0"}`
            }}

            onClick={onClose}

            {...others}
        />


    );
};


Overlay.propTypes = {
    opened: PropTypes.bool,
    bgColor: PropTypes.string,
    onClose: PropTypes.func,
    className: PropTypes.string,
};

export default Overlay;
