import { Outlet } from "react-router-dom"
import MainNav from "../components/MainNav"


function AdminLayout() {
    return (
        <>
            <header className='bg-danger'>
                {/* Title */}
                <h2 className='text-center py-3 m-0'>Il tuo header</h2>
                {/* Navbar */}
                <MainNav />
            </header>
            <Outlet></Outlet>
            <footer className="bg-danger">
                <h3 className="text-center py-3 m-0">Il tuo footer</h3>
            </footer>
        </>
    )
}

export default AdminLayout