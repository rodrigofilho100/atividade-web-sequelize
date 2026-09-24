const {Router} = require("express");
const categoriaController = require("../controllers/CategoriaController.js");

const router = Router();

router.post("/", (req,res) => categoriaController.criar(req,res));
router.get("/", (req,res) => categoriaController.listar(req,res));
router.get("/:id", (req,res) => categoriaController.buscarPorId(req,res));
router.delete("/:id", (req,res) => categoriaController.deletar(req,res));
router.put("/:id", (req,res) => categoriaController.atualizar(req,res));

module.exports = router;