class LivroService{
    constructor(livroRepository){
        this.repository=livroRepository;
    }
    
    async cadastrar(dados){
        return this.repository.criar(dados);
    }

    async listarTodos(){
        return this.repository.listarTodos();
    }
    async procurarPorId(id){
        const livro=await this.repository.buscarPorId(id);
        if (!livro){
            throw new Error({"erro": "Livro não encontrado"});
        }
        else return livro;
    }
    async buscaAvancada(filtro){
        condicoes={}
        if (filtro.titulo){
            condicoes.titulo=[Op.like]: `%${filtros.titulo}%`;
        }
        if (filtro.ano){
            condicoes.ano= Number(filtro.ano);
        }
        if (filtros.disponivel !== undefined) {
            condicoes.disponivel = filtros.disponivel === 'true';
        }
        return this.repository.listarTodos(condicoes);
    }
    

    async atualizar(id, dados){
        return this.repository.atualizar(id, dados);
    }

    async excluir(id){
        const livro=await this.repository.buscarPorId(id);
        if (!livro) throw new Error("erro": "Livro não encontrado");
        else return this.repository.excluir(id);
    }
}
module.exports=LivroService
