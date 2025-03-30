const NavBarMiEmrepsa = ({ activo = "/Empresa" }) => {
    const NavItem = ({ children, href}) => {
        return (
            <li className="nav-item">
                <a className={`nav-link ${activo==href && "active fw-bold"}`} href={href}>{children}</a>
            </li>
        )
    }

    return (
        <ul className="nav nav-tabs">
            <NavItem href="/Empresa">Empresa</NavItem>
            <NavItem href="/RecursosHumanos">RRHH</NavItem>
            <NavItem href="/Inventario">Inventario</NavItem>
            <NavItem href="/Ficha">Ficha</NavItem>
        </ul>
    )
};

export default NavBarMiEmrepsa;