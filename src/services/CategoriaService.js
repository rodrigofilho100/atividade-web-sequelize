const CategoriaRepository = require("../repositories/CategoriaRepository");

class CategoriaService{
    constructor(repositorio){
        this.repository=repositorio;
    }
    
    async cadastrar(dados){
        try{
            return this.repository.criar(dados);
        } catch (error){
            throw {message: error.message};
        }
    }

    async listarTodos(){
        return this.repository.listarTodos();
    }
    async procurarPorId(id){
        const categoria=await this.repository.buscarPorId(id);
        if (!categoria){
            throw {message: "Categoria não encontrada"};
        }
        else return categoria;
    }

    async atualizar(id, dados){
        return this.repository.atualizar(id, dados);
    }

    async excluir(id){
        const categoria=await this.repository.buscarPorId(id);
        if (!categoria) throw {message: "Categoria não encontrada"};
        else return this.repository.excluir(id);
    }
}
module.exports=new CategoriaService(CategoriaRepository);
