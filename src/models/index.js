const Autor = require("./Autor");
const Categoria = require("./Categoria");
const Livro = require("./Livro");
const LivroCategoria = require("./LivroCategoria");

// Livro e Autor (1:N)
Livro.belongsTo(Autor, {foreignKey: "autorId"});
Autor.hasMany(Livro, {foreignKey: "autorId"});

// Livro e Categoria (N:N)
Livro.belongsToMany(Categoria, {through: LivroCategoria, foreignKey: "livroId"});
Categoria.belongsToMany(Livro, {through: LivroCategoria, foreignKey: "categoriaId"});

module.exports={Autor, Livro, Categoria, LivroCategoria};