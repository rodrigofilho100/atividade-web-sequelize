const sequelize = require("./config/database");
const Autor = require("./models/Autor");
async function testarBanco() {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        
        console.log("Banco conectado!");
    } catch (error) {
        console.error({"Erro": error});
    }
}
testarBanco();
