import React from "react";

//Deps
import clsx from 'clsx';


const ToolbarTitle = (props) => {
    const {
        color = 'initial',
        title,
        className,
        ...others
    } = props;

    return (
        <div className={
            clsx(
                "toolbar_title",
                className
            )}
            style={{
                color: `${color !== "initial" ? color : "#414141"}`
            }}
            {...others}
        >
            {title}
        </div>
    );
};



export default ToolbarTitle;
