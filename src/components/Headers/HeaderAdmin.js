
import useDropdown from "../../contexts/hooks/useDropdown";
import { useAuth } from "../../contexts/AuthContext";

const HeaderAdmin = () => {
    const { isOpen, toggleDropdown, dropdownRef } = useDropdown();
    const { logout } = useAuth();

    return (
        <>
        </>
    );
}

export default HeaderAdmin;