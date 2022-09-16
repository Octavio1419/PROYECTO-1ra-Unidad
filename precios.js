let products = [];
let total = 0;

function add(product, preci) {
    console.log(product, preci);
    products.push(product);
    total = total + preci;
    document.getElementById("checkout").innerHTML = `Pagar $${total}`
}

function pay() {
    console.log(product, preci)
    window.alert(products.join(",\n"));
}