let ciudades = ["Madrid", "Lugo", "Oviedo", "Valencia"];
var contenido = document.getElementById("ejemplo1");
for (i = 0; i < ciudades.length; i++) {
    var parrafo = document.createElement("p");
    parrafo.innerText = ciudades;
    contenido.appendChild(parrafo);
}

let contenido2 = document.getElementById("ejemplo2");

function numeros(numero) {
    for (i = 0; i <= numero; i++) {;
        let parrafo = document.createElement("p");
        parrafo.innerText = i;
        contenido2.appendChild(parrafo);
    }
}
numeros(numero = 5);


//Programacion funcional, función de alto orden
const double = x => x * 2;
[1,2,3,4,5].map(double); // double actuaría como HOF (Higher Order Function);

// add devuelve una HOF
const add = (x) => {
  if (typeof x === 'number') {
    return y => x + y;
  }
  return y => `${x}${y}`;
}

const addFive = add(5); HOF: y => 5 + y;
console.log(addFive(3)); // 8
console.log(addFive(12)); // 17
