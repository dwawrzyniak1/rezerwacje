function init() {
    appendHeaderMenu();
    appendBootstrapImport();
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

function appendBootstrapImport() {
    let body = document.body;
    body.innerHTML += `
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    
        <!-- jQuery library -->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    
        <!-- Latest compiled JavaScript -->
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    `
}

init();