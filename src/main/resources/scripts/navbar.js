function init() {
    appendHeaderMenu();
    appendContentMenu();
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

function appendContentMenu() {
    let content = document.getElementsByTagName("main")[0];
    content.innerHTML = `
    <nav class="navbar navbar-expand-md navbar-light bg-light">
        <ul class="navbar-nav">
            <li class="nav-item">
                <!-- jakiś input do przeładowań ofert ze względu na zakładkę -->
                <a href="#" class="nav-link">Oferty polskie</a> 
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Oferty zagraniczne</a> 
            </li>
        </ul>
    </nav>
    ` + content.innerHTML;
}

init();