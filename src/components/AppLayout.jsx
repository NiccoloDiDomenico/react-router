import { Outlet } from "react-router-dom"


function AppLayout() {
    return (
        <header>
            <h1>Header</h1>
        </header>

        <Outlet />

        <footer>
            <h3>Footer</h3>
        </footer>
    )
}

export default AppLayout