const express = require("express");
const app = express();
const path = require("path");
const PORT = 5000;
const userRoutes = require("./routes/userRoutes");
const bagagemRoutes = require("./routes/bagagemRoute");
const cors = require("cors");
const authenticateToken = require("./middlewares/authMiddleware");


app.use(express.json());
app.use(cors());

app.use("/imagens", express.static(path.join(__dirname, "src", "assets"))); //configuracao para servir imagens para o client
<<<<<<< HEAD
app.use("/", userRoutes, bagagemRoutes);

=======
app.use("/", userRoutes);
>>>>>>> 22cadf1721c3af3adf20e7f097ada68bfdf50030

app.listen(PORT, () => {
  console.log("Servidor Rodando na porta " + PORT);
});
