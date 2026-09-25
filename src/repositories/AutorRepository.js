const {Autor}=require('../models/');
class AutorRepository{
    listarTodos(){
        return Autor.findAll();
    }
    criar(dados){
        return Autor.create(dados);
    }
    buscarPorId(id){
        return Autor.findByPk(id);
    }
    atualizar(id, dados){
        return Autor.update(dados, {where: {autorId: id}});
    }
    excluir(id){
        return Autor.destroy({where: {autorId: id}});
    }
}
module.exports=new AutorRepository
