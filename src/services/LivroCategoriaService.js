const {LivroService, CategoriaService}=require('./services')
class LivroCategoriaService{
    constructor(categoriaRepository){
        this.repository=categoriaRepository;
    }
    async associarLivroCategoria(dados){
        const livro=await LivroService.procurarPorId(dados.livroId);
        const categoria=await CategoriaService.procurarPorId(dados.categoriaId);
        if (!livro || !categoria){
            throw {"erro": "Livro ou categoria inexistente"};
        }
        else{
            return this.repository.associar(dados);
        }
    }
}
module.exports=LivroCategoriaService
