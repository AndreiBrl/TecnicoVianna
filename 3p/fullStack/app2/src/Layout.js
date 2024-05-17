import React from "react";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <React.Fragment>
            <nav>
                <ul>
                    <li><Link to="/pagina1">Home</Link></li>

                    <li><Link to="/pagina2">Página 2</Link></li>
                </ul>
            </nav>
            <Outlet />
        </React.Fragment>
    );
};

export default Layout;
