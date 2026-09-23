{LivroService, CategoriaService}=require(./services)
class LivroCategoriaService{
    constructor(categoriaRepository){
        this.repository=categoriaRepository;
    }
    async associarLivroCategoria(dados){
        const livro=LivroService.procurarPorId(dados.livroId);
        const categoria=CategoriaService.procurarPorId(dados.categoriaId);
        if (!livro || !categoria){
            throw new Error("erro": "Livro ou categoria inexistente");
        }
        else{
            return this.repository.associar(dados);
        }
    }
}
module.exports=LivroCategoriaService
