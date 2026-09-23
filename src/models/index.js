const Autor = require("./Autor");
const Livro = require("./Livro");
const Categoria = require("./Categoria");
const LivroCategoria = require("./LivroCategoria");

// Livro e Autor (1:N)
Livro.belongsTo(Models.Autor, {foreignKey: "autorId"});
Autor.hasMany(Livro, {foreignKey: "autorId"});

// Livro e Categoria (N:N)
Livro.belongsToMany(Categoria, {through: "LivroCategoria"});
Categoria.belongsToMany(Livro, {through: "LivroCategoria"});