const AutorRepository = require("../repositories/AutorRepository");

class AutorService{
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
        const autor=await this.repository.buscarPorId(id);
        if (!autor){
            throw {message: "Autor não encontrado"};
        }
        else return autor;
    }
    async atualizar(id, dados){
        return this.repository.atualizar(id, dados);
    }
    async excluir(id){
        const autor=await this.repository.buscarPorId(id);
        if (!autor) throw {message: "Autor não encontrado"};
        else return this.repository.excluir(id);
    }
}
module.exports=new AutorService(AutorRepository);
