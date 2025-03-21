import { useState } from "react";
import { useLocation } from "react-router-dom";


const SidebarAdmin = ({ isOpen, toggleOpen }) => {
    const loaction = useLocation();

    const [isOpens, setIsOpens] = useState(false);
    const [moOpen, setMoOpen] = useState();

    const toggleOpens = () => {
        setIsOpens((prev) => !prev);
    }

    const toggleMoOpen = (close) => {
        setMoOpen((prev) => close == false ? close : !prev);
    }

    return (
        <>
            
        </>
    );
}

export default SidebarAdmin;