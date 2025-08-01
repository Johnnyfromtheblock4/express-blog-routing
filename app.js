// importo express
const express = require("express");

// definisco la variabile app che contiene express
const app = express();

// definisco la porta
const port = 3000;

// definisco la rotta base
app.get("/", (req, res) => {
  res.send("Benvenuti nel mio blog");
});

// dico al server di rimanere in ascolto alla porta 3000
app.listen(port, () => {
  console.log(`Server in ascolto sulla porta ${port}`);
});
