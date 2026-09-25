const express=require('express');
const app=express();

const {Autor, Livro, Categoria, LivroCategoria}=require('./models/index');

const autorRoutes=require('./routes/autorRoutes');
const livroRoutes=require('./routes/livroRoutes');
const categoriaRoutes=require('./routes/categoriaRoutes');

const AutorRepository=require('./repositories/AutorRepository');
const LivroRepository=require('./repositories/LivroRepository');
const CategoriaRepository=require('./repositories/CategoriaRepository');

const AutorService=require('./services/AutorService');
const LivroService=require('./services/LivroService');
const CategoriaService=require('./services/CategoriaService');

const LivroController=require("./controllers/LivroController");
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

        
        //const tables = await sequelize.getQueryInterface().showAllSchemas();
        //console.log(tables); 
        //await CategoriaRepository.excluir(1);
        /*await AutorService.cadastrar({
            nome: "Rodrick Heffley",
            email: "heffleylodeddiper@gmail.com"
        });
        console.log(await AutorService.listarTodos());*/
        
    } 
    catch (error) {
        console.error({"Erro": error});
    }
}
testarBanco();
module.exports=app;