import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';

//Deps
import clsx from 'clsx';

//#A1UI
import Btn from "appRoot/components/Btn";
import Icon from "appRoot/components/Icon";


const Noti = (props) => {
    const {
        opened = false,
        message,
        timeout = 5000,
        color = 'initial',
        bgColor = 'initial',
        onClose = () => { },
        className,
        ...others
    } = props;
    const [isOpened, setIsOpened] = useState(false);
    let snackbarTimer;

    const clearTimer = () => {
        try {
            clearTimeout(snackbarTimer);
        } catch (e) { console.error(e) }
    }


    useEffect(() => {
        if (opened !== isOpened) {
            clearTimer();
            setIsOpened(opened);
        }
    }, [opened]);

    useEffect(() => {
        if (isOpened) {
            snackbarTimer = setTimeout(() => {
                onClose();
            }, timeout);
        }

        return function cleanup() {
            clearTimer();
        };
    }, [isOpened])


    return (
        <div className={
            clsx(
                "a1_noti",
                {
                    "opened": isOpened,
                    "closed": !isOpened,
                },
                className
            )}
            {...others}
        >
            <div
                className="noti_container"
                style={{
                    background: `${bgColor !== `initial` ? bgColor : `#212121`}`,
                    color: `${color !== `initial` ? color : `#ffffff`}`
                }}
            >
                <div style={{ flex: 1, marginLeft: 8 }}>{message}</div>
                <Btn onClick={onClose} hasIcon size="small" color="inherit" >
                    <Icon icon='close' size={20} />
                </Btn>
            </div>
        </div>
    );
};

Noti.propTypes = {
    opened: PropTypes.bool,
    message: PropTypes.string,
    timeout: PropTypes.number,
    onClose: PropTypes.func.isRequired,
    color: PropTypes.string,
    bgColor: PropTypes.string,
    className: PropTypes.string,
};

export default Noti;