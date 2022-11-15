/*Data una lista della spesa già compilata nel vostro codice, stampare in console gli elementi della lista individualmente, prima con un ciclo for, poi con un ciclo while.
Quando le stampe in console sono corrette, stampare gli elementi in un elenco puntato in HTML, utilizzando uno dei due cicli scritti al punto precedente. */

let listaSpesa = ["Pane", "Latte", "Cereali", "Cicoria", "Uva Sultanina"];
let bottonespesa = document.getElementById("bottoneElemento");
let bottoneEliminatore;
bottonespesa.addEventListener("click", function () {
    let inputspesa = document.getElementById("nuovoElementoSpesa").value;
    listaSpesa.push(inputspesa)
    document.getElementById("listaSpesa").innerHTML += '<li id="elementospesa' + (listaSpesa.length - 1) + '"><p>' + inputspesa + '</p> <button type="button" id="elementospesa' + (listaSpesa.length - 1) + '" class="btn btn-outline-secondary">Elimina</button></li>'
    let bottoneEliminatore = document.getElementById("elementospesa"+(listaSpesa.length-1))
    bottoneEliminatore.addEventListener("click", function () {
        document.getElementById("elementospesa"+(listaSpesa.length-1)).classList = "d-none";}
    )
})

/* utilizzo un ciclo while

let i = 0

while (i< listaSpesa.length){
    console.log (listaSpesa[i])
    i++
} */

// utilizzo un ciclo for


for (let i = 0; i < listaSpesa.length; i++) {
    console.log(listaSpesa[i])
    document.getElementById("listaSpesa").innerHTML += '<li id="elementospesa' + i + '"><p>' + listaSpesa[i] + '</p> <button "type="button" id="elementospesa' + i + '" class="btn btn-outline-secondary">Elimina</button></li>'
}

for (let i=0; i<listaSpesa.length; i++){
    bottoneEliminatore = document.getElementById("elementospesa"+i)
    bottoneEliminatore.addEventListener("click", function () {
        document.getElementById("elementospesa"+i).classList = "d-none";}
    )
}