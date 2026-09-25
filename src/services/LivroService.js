const LivroRepository=require('../repositories/LivroRepository');
class LivroService{
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
        const livro=await this.repository.buscarPorId(id);
        if (!livro){
            throw new Error({message: "Livro não encontrado"});
        }
        else return livro;
    }
    async buscaAvancada(filtro){
        condicoes={};
        if (filtro.titulo){
            condicoes.titulo={[Op.like]: `%${filtros.titulo}%`};
        }
        if (filtro.ano){
            condicoes.ano= Number(filtro.ano);
        }
        if (filtro.disponivel !== undefined) {
            condicoes.disponivel = filtro.disponivel === 'true';
        }
        return this.repository.listarTodos(condicoes);
    }
    async buscaComPaginacao(limite, offset){
        return this.repository.buscarComPaginacao(limite, offset);
    }

    async atualizar(id, dados){
        return this.repository.atualizar(id, dados);
    }

    async excluir(id){
        const livro=await this.repository.buscarPorId(id);
        if (!livro) throw new Error({message: "Livro não encontrado"});
        else return this.repository.excluir(id);
    }

    async vincularCategoria(dados){
        return LivroRepository.associarCategoria(dados);
    }
}
module.exports=new LivroService(LivroRepository);
