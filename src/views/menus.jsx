const Menus = () => {
    return (
        <>
            <nav class="navbar navbar-dark bg-dark">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                </div>
            </nav>
            <div className="container">
                <div className="row">
                    <div className="collapse col-2" id="navbarToggleExternalContent">
                        <ul class="nav flex-column">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Active</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Link</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Link</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-10">
                        <div><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo quis itaque optio accusantium fuga eveniet earum quidem minus? Dolore nemo rem, eveniet nostrum qui repellat voluptates illo odio voluptate dolor.</p></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Menus;