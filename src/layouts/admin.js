import { Route, Routes } from "react-router-dom";

// contexts
import { useSidebar } from "../contexts/hooks/useSidebar";

// assets

// views

// components
import HeaderAdmin from "../components/Headers/HeaderAdmin";
import SidebarAdmin from "../components/Sidebar/SidebarAdmin";
import FooterAdmin from "../components/Footers/FooterAdmin";


// Theme 관련 라우트 컴포넌트 분리
const AdminRoutes = () => {
    const { sidebarOpen, toggleSidebarOpen } = useSidebar();

    return (
        <div className="bg-[#F5F5F5]">
            <HeaderAdmin />
            <main className="flex overflow-hidden min-h-screen pt-[4.5em]">
                <SidebarAdmin isOpen={sidebarOpen} toggleOpen={toggleSidebarOpen} />
                <div id="main-content" className={`relative w-full h-full overflow-y-auto transition-width duration-200 ${sidebarOpen ? "lg:ml-14" : "lg:ml-64"}`}>
                    <Routes>
                    </Routes>
                    <FooterAdmin />
                </div>
            </main>
        </div>
    );
}

export default AdminRoutes;