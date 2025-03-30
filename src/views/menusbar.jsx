const MenusBar = ({ menus, currentPath }) => {

    const isMenuOpen = (menu) => {
        // if (menu.key === currentPath) return true; // Si el menú coincide con la ruta actual, se abre
        // if (menu.submenus) {
        //     return menu.submenus.some(sub => isMenuOpen(sub)); // Si un submenú coincide, abrir el padre también
        // }
        return false;
    };

    // Renderizado de los submenús
    const SubMenu = ({ submenus, parentId }) => (
        <ul className="list-group list-group-flush">
            {submenus.map((submenu, i) => {
                const idCollapse = `${parentId}-submenu-${i}`;
                const isOpen = isMenuOpen(submenu) ? "show" : "";

                return (
                    <li key={submenu.key} className="list-group-item">
                        <button
                            className={`btn w-100 text-start ${isOpen ? "fw-bold" : ""}`}
                            type="button"
                            data-bs-toggle={submenu.submenus ? "collapse" : ""}
                            data-bs-target={`#${idCollapse}`}
                            aria-expanded={isOpen ? "true" : "false"}
                            aria-controls={idCollapse}
                        >
                            {submenu.name}
                        </button>
                        {submenu.submenus && (
                            <div id={idCollapse} className={`collapse ${isOpen}`}>
                                <SubMenu submenus={submenu.submenus} parentId={idCollapse} />
                            </div>
                        )}
                    </li>
                );
            })}
        </ul>
    );

    return (
        <div className="accordion" id="accordion-menus">
            {menus.map((m, index) => {
                const idcollpse = `collapse-menus-${index}`;
                const idheading = `heading-${index}`;
                const isOpen = isMenuOpen(m) ? "show" : "";

                // menus principales o encavezados
                return (
                    <div key={`menu-${index}`} className="accordion-item">
                        <h2 id={idheading} className="accordion-header">
                            <button
                                className={`accordion-button ${isOpen ? "" : "collapsed"}`}
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target={`#${idcollpse}`}
                                aria-expanded={isOpen ? "true" : "false"}
                                aria-controls={idcollpse}
                            >
                                {m.name}
                            </button>
                        </h2>
                        <div
                            id={idcollpse}
                            className={`accordion-collapse collapse ${isOpen}`}
                            aria-labelledby={idheading}
                            data-bs-parent="#accordion-menus"
                        >
                            {m.submenus.length > 0 && (
                                <SubMenu submenus={m.submenus} parentId={idcollpse} />
                            )}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default MenusBar;