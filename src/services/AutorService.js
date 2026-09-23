class AutorService{
    constructor(autorRepository){
        this.repository=autorRepository;
    }
    async cadastrar(dados){
        return this.repository.criar(dados);
    }
    async listarTodos(){
        return this.repository.listarTodos();
    }
    async procurarPorId(id){
        const autor=await this.repository.buscarPorId(id);
        if (!autor){
            throw {"erro": "Autor não encontrado"};
        }
        else return autor;
    }
    async atualizar(id, dados){
        return this.repository.atualizar(id, dados);
    }
    async excluir(id){
        const autor=await this.repository.buscarPorId(id);
        if (!autor) throw {"erro": "Autor não encontrado"};
        else return this.repository.excluir(id);
    }
}
module.exports=AutorService
