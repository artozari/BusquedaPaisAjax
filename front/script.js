const inputPais = document.getElementById("inputPais");
const resultados = document.getElementById("resultados");

inputPais.addEventListener(`keyup`, function () {
  let nombre = inputPais.value;
  const xhr = new XMLHttpRequest();
  console.log("algo");

  xhr.addEventListener(`load`, function () {
    resultados.innerHTML = "";
    let response = JSON.parse(xhr.responseText);
    console.log(response);
    response.forEach((element) => {
      const pais = document.createElement("p");
      const b = document.createElement("b");
      b.textContent = nombre;
      pais.textContent = element;
      resultados.appendChild(pais);
      pais.addEventListener("click", function () {
        inputPais.value = this.innerHTML;
      });
    });
  });
  xhr.open("GET", `/buscar?nombrePais=${nombre}`);
  xhr.send();
});

console.log(resaltar("Bolivia", "a"));
function resaltar(palabra, resaltar) {
  let p1 = palabra.indexOf(resaltar.charAt(0));
  let p2 = palabra.lastIndexOf(resaltar.charAt(resaltar.length - 1));
  palabra = palabra.slice(p1, p2);
  return palabra;
}
