const {Livro, Categoria}=require(../models);

class LivroCategoriaRepository{
    associar(dados){
        return LivroCategoria.create(dados);
    }
}
module.exports=LivroCategoriaRepository
