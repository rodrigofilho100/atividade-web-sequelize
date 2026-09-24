const express = require("express");
const livroService = require("../services/LivroService");

class LivroController{
    async criar(req,res){
        try{
            const novoLivro = await livroService.cadastrar(req.body);
            return res.status(201).json(novoLivro);
        }catch(error){
            return res.status(400).json({ erro: error.message });
        }
    }
    async listar(req,res){
        try{
            const {titulo, ano, disponivel} = req.query;
            const livros = await livroService.listarTodos({titulo,ano,disponivel});
            return res.status(200).json(livros);
        }catch(error){
            return res.status(500).json({erro: error.message});
        }
    }
    async buscarPorId(req,res){
        try{
            const {id} = req.params;
            const livro = await livroService.procurarPorId(id);
            return res.status(200).json(livro);
        }catch(error){
            return res.status(404).json({erro: error.message});
        }
    }
    async deletar(req,res){
        try{
            const {id} = req.params;
            await livroService.excluir(id);
            return res.status(200).json({mensagem: "Livro removido com sucesso."});
        }catch(error){
            return res.status(404).json({erro: error.message});
        }
    }
    async atualizar(req,res){
        try{
            const {id} = req.params;
            const livroAtualizado = await livroService.atualizarLivro(id,req.body);
            return res.status(200).json(livroAtualizado);
        }catch(error){
            return res.status(400).json({error:error.message});
        }
    }
}

module.exports = new LivroController();