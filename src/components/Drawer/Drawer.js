import React, { Fragment } from "react";

//Deps
import clsx from 'clsx';



//#A1UI
import Overlay from "appRoot/components/Overlay";


const Drawer = (props) => {
    const {
        bgColor = 'initial',
        opened = false,
        anchor = 'left',
        onClose = () => { },
        children,
        className,
        ...others
    } = props;


    return (
        <Fragment>
            <Overlay opened={opened} onClose={onClose} />

            <div className={
                clsx(
                    "a1_drawer",
                    `${anchor}`,
                    {
                        "opened": opened,
                        "closed": !opened,
                    },
                    className
                )}
                style={{
                    background: `${bgColor !== "initial" ? bgColor : "#ffffff"}`
                }}
                {...others}
            >
                {children}


            </div>
        </Fragment >
    );
}

/*Drawer.propTypes = {
    bgColor: PropTypes.string,
    opened: PropTypes.bool,
    anchor: PropTypes.oneOf(['left', 'right', 'top', 'bottom']),
    children: PropTypes.node.isRequired,
    onClose: PropTypes.func.isRequired,
    className: PropTypes.string
};*/

export default Drawer;