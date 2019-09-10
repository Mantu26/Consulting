import React from "react";

//Deps
import clsx from 'clsx';


const Bottombar = (props) => {
    const {
        opened = true,
        bgColor = 'initial',
        className,
        children,
        ...others
    } = props;

    return (
        <div className={
            clsx(
                "a1_bottombar",
                {
                    "opened": opened,
                    "closed": !opened,
                },
                className
            )}

            {...others}
        >
            <div
                className="bottombar_container"
                style={{ background: `${bgColor !== "initial" ? bgColor : "#ffffff"}` }}
            >
                {children}
            </div>
        </div>
    );
}

/*Bottombar.propTypes = {
    opened: PropTypes.bool,
    bgColor: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
};*/


export default Bottombar;
