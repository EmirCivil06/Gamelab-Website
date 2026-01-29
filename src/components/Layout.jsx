import NavigationBar from "../Components/NavigationBar";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Layout() {
    const location = useLocation();

    const hideBar = location.pathname.startsWith("/test");
    return (<>
    {!hideBar && <NavigationBar/>}
    <main>
        <Outlet/>
    </main>
    </>)
}