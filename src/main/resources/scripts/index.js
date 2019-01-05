function init(){
    appendHeaderMenu();
    appendContentMenu();
}

function appendHeaderMenu() {
    let header = document.getElementById("header");
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
    let content = document.getElementById("content");
    content.innerHTML = `
    <nav class="navbar navbar-expand-md navbar-light bg-light">
        <ul class="navbar-nav">
            <li class="nav-item">
                <!-- jakiś input do przeładowań ofert ze względu na zakładkę -->
                Oferty polskie
            </li>
            <li class="nav-item">
                Oferty zagraniczne
            </li>
        </ul>
    </nav>
    ` + content.innerHTML;
}

init();