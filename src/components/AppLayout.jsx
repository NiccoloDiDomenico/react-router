import { Outlet } from "react-router-dom"


function AppLayout() {
    return (
        <>
            <header className='bg-danger'>
                {/* Title */}
                <h1 className='text-center py-3 m-0'>Blog form multifield</h1>
            </header>
            <Outlet></Outlet>
            <footer className="bg-danger">
                <h3 className="text-center py-3 m-0">Footer</h3>
            </footer>
        </>
    )
}

export default AppLayout