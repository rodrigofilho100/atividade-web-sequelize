const {Livro, Autor}=require(../models);
const {Op}=require(sequelize)
class LivroRepository{
    listarTodos(condicoes){
        return Livro.findAll({include: Autor, where: condicoes});
    }
    buscarPorId(id){
        return Livro.findByPk(id);
    }
    buscarPorTitulo(t){
        return Livro.findAll({where: {titulo: {[Op.like]: `%${t}%`}}});
    }
    buscarPorAno(a){
        return Livro.findAll({where: {ano: a}});
    }
    buscarDisponiveis(){
        return Livro.findAll({where: {disponivel: true}});
    }

    criar(dados){
        return Livro.create(dados);
    }
    atualizar(id, dados){
        return Livro.update(dados, {where: {livroId: id}});
    }
    excluir(id){
        return Livro.destroy({where: {id: livroId}});
    }
}
module.exports=LivroRepository
