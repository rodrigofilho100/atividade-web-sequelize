const sequelize = require("./config/database");
const Autor = require("./models/Autor");
async function testarBanco() {
try {
await sequelize.authenticate();
await sequelize.sync();
const autor = await Autor.create({
    nome: "Machado de Assis",
    email: "machado@email.com"
});

let autorR = await Autor.findByPk(1);
console.log(autorR);

console.log("Banco conectado!");
} catch (error) {
console.error("Erro:"

, error);

}
}



testarBanco();
