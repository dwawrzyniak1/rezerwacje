function init() {
    appendHeaderMenu();
}

function appendHeaderMenu() {
    let header = document.getElementsByTagName("header")[0];
    header.innerHTML = `
        <nav class="navbar navbar-expand-md navbar-dark bg-dark">
            <div class="navbar-brand">
                <span class="badge badge-info">Rezerwacje.pl</span>
            </div>
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <a class="nav-link" href="#">Noclegi</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Oferty</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Transporty</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Konto</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Wyloguj</a>
                </li>
            </ul>
        </nav>
`
}

init();