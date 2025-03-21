import { Route, Routes } from "react-router-dom";

// contexts
import { useSidebar } from "../contexts/hooks/useSidebar";

// assets

// views
import HeaderAuth from "../components/Headers/HeaderAdmin";
import FooterAuth from "../components/Footers/FooterAdmin";
import SidebarAuth from "../components/Sidebar/SidebarAdmin";

// Theme 관련 라우트 컴포넌트 분리
const AuthRoutes = () => {
    const { sidebarOpen, toggleSidebarOpen } = useSidebar();

    return (
        <div className="bg-[#F5F5F5]">
            <HeaderAuth />
            <main className="flex overflow-hidden min-h-screen pt-[4.5em]">
                <SidebarAuth isOpen={sidebarOpen} toggleOpen={toggleSidebarOpen} />
                <div id="main-content" className={`relative w-full h-full overflow-y-auto transition-width duration-200 ${sidebarOpen ? "lg:ml-14" : "lg:ml-64"}`}>
                    <Routes>
                    </Routes>
                    <FooterAuth />
                </div>
            </main>
        </div>
    );
}

export default AuthRoutes;