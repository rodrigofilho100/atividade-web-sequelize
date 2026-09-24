const {Router} = require("express");
const autorController = require("../controllers/AutorController");

const router = Router();

router.post("/", (req,res) => autorController.criar(req,res) );
router.get("/", (req,res) => autorController.listar(req,res) );
router.get("/:id", (req,res) => autorController.buscarPorId(req,res) );
router.put("/:id", (req,res) => autorController.atualizar(req,res) );
router.delete("/:id", (req,res) => autorController.deletar(req,res) );

module.exports = router;