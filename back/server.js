const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const pais = require("./paises.json");

app.use(express.static(path.join(__dirname, `../front`)));

app.get("/", function (req, res) {
  res.sendFile(__filename + `/index.html`);
});

app.get("/buscar", function (req, res) {
  let nombreReqPais = req.query.nombrePais;
  nombreReqPais1eraMay =
    nombreReqPais.charAt(0).toUpperCase() + nombreReqPais.slice(1);
  let paises = pais.filter(
    (element) =>
      element.includes(nombreReqPais) || element.includes(nombreReqPais1eraMay)
  );
  res.json(paises);
});

app.listen(port, function () {
  console.log(`escuchando puerto 3000`);
});
