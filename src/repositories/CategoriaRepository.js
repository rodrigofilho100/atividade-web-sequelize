const {Categoria}=require('../models');

class CategoriaRepository{
    listarTodos(){
        return Categoria.findAll();
    }
    criar(dados){
        return Categoria.create(dados);
    }
    buscarPorId(id){
        return Categoria.findByPk(id);
    }
    atualizar(id, dados){
        return Categoria.update(dados, {where: {categoriaId: id}});
    }
    excluir(id){
        return Categoria.destroy({where: {categoriaId: id}});
    }
}
module.exports=CategoriaRepository
