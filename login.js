var attempt = 3;

function validate() {
    var usuar = document.getElementById("usuar").value;
    var password = document.getElementById("password").value;
    if (usuar == "administrador" && password == "asd") {
        alert("Ingreso exitosamente");
        window.location = "dashboard.html"
        return false;
    }
    if (usuar == "cliente" && password == "123") {
        alert("Ingreso exitosamente")
        window.location = "productos.html"
        return false;
    } else {
        attempt--;
    }
    alert("Te queda  " + attempt + " intento mas")
    if (attempt == 0) {
        window.location = "error.html"
    } else {

    }
}

function ir() {
    window.location = "index.html"
}