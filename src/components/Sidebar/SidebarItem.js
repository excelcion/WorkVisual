import { Link } from "react-router-dom";
import IconWidget from "../Icons/icon_widget";

const SidebarItem = ({ href, icon, name, count, textShow, iconClassName, textClassName, chk }) => {
    
    return (
        <Link to={href}
            className={`flex items-center p-2 text-base text-gray-900 rounded-lg ${ chk ? "bg-main-900 text-white" : "hover:bg-gray-100 group dark:text-gray-200 dark:hover:bg-gray-700 "}`}
        >
            <IconWidget icon={icon} className={iconClassName + (chk ? " fill-white" : '')} />
            <span className={`${textClassName} ${textShow ? 'hidden' : ''}`}  >{name}</span>
            {count > 0 ? <span className="flex items-center justify-center ml-auto w-7 h-7 text-xs text-white bg-red-500 rounded-full ">{count}</span> : ''}
        </Link>
    );
}

export default SidebarItem;