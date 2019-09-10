import React, { Fragment } from "react";
import PropTypes from 'prop-types';

//Deps
import clsx from 'clsx';


//#A1UI
import Overlay from "appRoot/components/Overlay";
import Btn from "appRoot/components/Btn";


const Confirm = (props) => {
    const {
        color = 'initial',
        opened = false,
        title = "Confirm",
        message = "Are you sure you?",
        hope = "Yes",
        nope = "Cancel",
        onDone = () => { },
        className,
        ...others
    } = props;

    const handleClose = isOk => () => {
        onDone(isOk);
    };

    return (
        <Fragment>
            <Overlay opened={opened} onClose={handleClose(false)} />

            <div className={
                clsx(
                    "a1_confirm",
                    {
                        "opened": opened,
                        "closed": !opened,
                    },
                    className
                )}
                {...others}
            >
                <div className="confirm_container">
                    <div className="confirm_title">{title}</div>
                    <div className="confirm_msg">{message}</div>

                    <div className="confirm_actions">
                        <Btn
                            color={`${color !== 'initial' ? color : '#3f51b5'}`}
                            onClick={handleClose(false)}
                            className="marginSmallRight"
                        >
                            {nope}
                        </Btn>
                        <Btn
                            color={`${color !== 'initial' ? color : '#3f51b5'}`}
                            onClick={handleClose(true)}
                        >
                            {hope}
                        </Btn>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

Confirm.propTypes = {
    color: PropTypes.string,
    opened: PropTypes.bool,
    title: PropTypes.string,
    message: PropTypes.string,
    hope: PropTypes.string,
    nope: PropTypes.string,
    onDone: PropTypes.func.isRequired,
    className: PropTypes.string
};

export default Confirm;
