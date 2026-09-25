const express=require('express');
const app=express();

const usuario=require("./models/Usuario");
const emprestimo=require("./models/Emprestimo");
const LivroService=require("./services/LivroService");

const autorRoutes=require('./routes/autorRoutes');
const livroRoutes=require('./routes/livroRoutes');
const categoriaRoutes=require('./routes/categoriaRoutes');

const sequelize = require("./config/database");

app.use(express.json());
app.use('/autores', autorRoutes);
app.use('/livros', livroRoutes);
app.use('/categorias', categoriaRoutes);

const PORT=3000;
app.listen(PORT, ()=>{
    console.log(`Servidor rodando na porta ${PORT}`);
});

async function testarBanco() {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        console.log("Banco conectado!");

        // Como não foi especificado na atividade se deveria haver
        // Repository, Service, Controller e Routes para Usuário e Empréstimo, 
        // fiz a transação diretamente pelo app.js mesmo
        const t = await sequelize.transaction();
        // usuário já criado no BD
        /*console.log(await usuario.create({
                "nome": "Rodrigo",
                "email": "rodrigo@gmail.com",
                "senha": "12345"
        }));*/
        try {
            console.log(await emprestimo.create({
                "usuarioId": 4,
                "livroId": 1,
                "dataEmprestimo": "2026/09/30",
                "dataDevolucao": "2026/10/30",
                "status": "Ativo"
            }, {transaction: t}));
            console.log(await LivroService.atualizar(1, {
                "disponivel": false,
                "transaction": t
            }))
            console.log("Transação realizada com sucesso");
            await t.commit();
        } catch (error){
            console.log(error);
            await t.rollback();
        }
    } 
    catch (error) {
        console.error({"Erro": error});
    }
}
testarBanco();
module.exports=app;