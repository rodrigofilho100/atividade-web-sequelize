const {Router} = require("express");
const livroControler = require("../controllers/LivroController.js");

const router = Router();

router.post("/", (req,res) => livroControler.criar(req,res));
router.get("/", (req,res) => livroControler.listar(req,res));
router.get("/:id", (req,res) => livroControler.buscarPorId(req,res));
router.delete("/:id", (req,res) => livroControler.deletar(req,res));
router.put("/:id", (req,res) => livroControler.atualizar(req,res));

module.exports = router;