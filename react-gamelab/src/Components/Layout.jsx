import NavigationBar from "../Components/NavigationBar/NavigationBar";
import { Outlet } from "react-router-dom";

export default function Layout() {
    return (<>
    <NavigationBar/>
    <main>
        <Outlet/>
    </main>
    </>)
}