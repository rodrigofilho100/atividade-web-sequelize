const {Livro, Autor, LivroCategoria} = require("../models");
class LivroRepository{
    listarTodos(condicoes){
        return Livro.findAll({include: Autor, where: condicoes});
    }
    buscarPorId(id){
        return Livro.findByPk(id);
    }
    buscarComPaginacao(limite, page){
        return Livro.findAndCountAll({
            limit: limite,
            offset: (page-1) * limite,
            include: Autor
        });
    }

    criar(dados){
        return Livro.create(dados);
    }
    atualizar(id, dados){
        return Livro.update(dados, {where: {livroId: id}, transaction: dados.transaction});
    }
    excluir(id){
        return Livro.destroy({where:{livroId: id}});
    }
    associarCategoria(dados){
        return LivroCategoria.create(dados);
    }
}
module.exports=new LivroRepository;