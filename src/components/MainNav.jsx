import { Link, NavLink } from "react-router-dom";

function MainNav() {
    const navMenu = [
        {
            path: "/",
            title: "Home"
        },
        {
            path: "/Blog",
            title: "Blog"
        },
        {
            path: "/AboutUs",
            title: "AboutUs"
        }
    ]

    return (
        <nav className="navbar bg-danger-subtle">
            <div className="container-fluid justify-content-center">
                {
                    navMenu.map((curNav, index) => (
                        <NavLink key={index} className="navbar-brand" to={curNav.path}>{curNav.title}</NavLink>
                    ))
                }
            </div>
        </nav>
    )
}

export default MainNav