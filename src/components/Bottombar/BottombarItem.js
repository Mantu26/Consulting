import React from "react";

//Deps
import clsx from 'clsx';

//#A1UI
import Icon from "appRoot/components/Icon";

const BottombarItem = (props) => {
    const {
        icon,
        title,
        isActive = false,
        color = 'initial',
        activeColor = 'initial',
        className,
        ...others
    } = props;


    return (
        <button className={
            clsx(
                "btnBase",
                "bottombar_item",
                className
            )}
            style={{
                color: `${
                    isActive !== false
                        ?
                        (activeColor !== 'initial' ? activeColor : '#3f51b5')
                        :
                        (color !== 'initial' ? color : '#616161')
                    }`
            }}

            {...others}
        >
    

            <Icon icon={icon} />

            {
                title
                    ?
                    <div className="bottombar_item_title">
                        {title}
                    </div>
                    :
                    null
            }
        </button>
    );
}

/*BottombarItem.propTypes = {
    icon: PropTypes.string.isRequired,
    title: PropTypes.string,
    isActive: PropTypes.bool,
    color: PropTypes.string,
    activeColor: PropTypes.string,
    className: PropTypes.string,
};*/



export default BottombarItem;