import NavigationBar from "./NavigationBar";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";

// Navigasyon Barının main element flowunun dışında kalmasını sağlayabilmek için Layout Elementi
export default function Layout() {
    const location = useLocation();
    // Admin paneli testi için, şuan kullanım dışı
    const hideBar = location.pathname.startsWith("/test");
    return (<>
    {!hideBar && <NavigationBar/>}
    <main>
        <Outlet/>
    </main>
    </>)
}