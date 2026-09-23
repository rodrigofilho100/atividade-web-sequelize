class CategoriaService{
    constructor(categoriaRepository){
        this.repository=categoriaRepository;
    }
    
    async cadastrar(dados){
        return this.repository.criar(dados);
    }

    async listarTodos(){
        return this.repository.listarTodos();
    }
    async procurarPorId(id){
        const categoria=await this.repository.buscarPorId(id);
        if (!categoria){
            throw new Error({"erro": "Categoria não encontrada"});
        }
        else return categoria;
    }

    async atualizar(id, dados){
        return this.repository.atualizar(id, dados);
    }

    async excluir(id){
        const categoria=await this.repository.buscarPorId(id);
        if (!categoria) throw new Error("erro": "Categoria não encontrada");
        else return this.repository.excluir(id);
    }
}
module.exports=CategoriaService
