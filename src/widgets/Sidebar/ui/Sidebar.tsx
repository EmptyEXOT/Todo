import React, {FC} from 'react';
import classNames from "classnames";

interface SidebarProps {

}

const Sidebar: FC<SidebarProps> = (props) => {
    return (
        <div className={classNames('bg-amber-400 h-screen w-60 fixed pt-14')}>
            test
        </div>
    );
};

export default Sidebar;