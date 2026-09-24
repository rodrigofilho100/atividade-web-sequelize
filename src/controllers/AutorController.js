const express = require("express");
const autorService = require("../services/AutorService");

class AutorController{
    async criar(req,res){
        try{
            const autor = await autorService.cadastrar(req.body);
            return res.status(201).json(autor);
        }catch(error){
            return res.status(400).json({erro: error.message});
        }
    }
    async listar(req,res){
        try{
            const autores = await autorService.listarTodos();
            return res.status(200).json(autores);
        }catch(error){
            return res.status(500).json({erro: error.message});
        }
    }
    async buscarPorId(req,res){
        try{
            const {id}=req.params;
            const autor = await autorService.procurarPorId(id);
            return res.status(200).json(autor);
        }catch(error){
            return res.status(400).json({erro:error.message});
        }
    }
    async deletar(req,res){
        try{
            const {id}=req.params;
            await autorService.excluir(id);
            return res.status(200).json({mensagem: "Autor removido com sucesso"});
        }catch(error){
            return res.status(404).json({erro:error.message});
        }
    }
    async atualizar(req,res){
        try{
            const {id} = req.params;
            const autorAtualizado = await autorService.atualizar(id, req.body);
            return res.status(200).json(autorAtualizado);
        }catch(error){
            return res.status(400).json({erro: error.message});
        }
    }
}