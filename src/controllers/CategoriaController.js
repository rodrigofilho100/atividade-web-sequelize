const express = require("express");
const categoriasService = require("../services/CategoriaService");

class CategoriaController{
    async criar(req,res){
        try{
            const categoria = await categoriasService.cadastrar(req.body);
            return res.status(201).json(categoria);
        }catch(error){
            return res.status(400).json({erro: error.message});
        }
    }
    async listar(req,res){
        try{
            const categorias =  await categoriasService.listarTodos();
            return res.status(200).json(categorias);
        }catch(error){
            return res.status(500).json({erro: error.message});
        }
    }
    async buscarPorId(req,res){
        try{
            const {id}=req.params;
            const categoria = await categoriasService.procurarPorId(id);
            return res.status(200).json(categoria);
        }catch(error){
            return res.status(400).json({erro: error.message});
        }
    }
    async deletar(req,res){
        try{
            const {id} = req.params;
            await categoriasService.excluir(id);
            return res.status(200).json({mensagem: "Categoria removida com sucesso."});
        }catch(error){
            return res.status(404).json({erro: error.message});
        }
    }
    async atualizar(req,res){
        try{
            const {id} = req.params;
            const categoriaAtualizada = await categoriasService.atualizar(id, req.body);
            return res.status(200).json(categoriaAtualizada);
        }catch(error){
            return res.status(400).json({erro: error.message});
        }
    }
}

module.exports = new CategoriaController;