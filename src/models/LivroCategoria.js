const {
Model,
DataTypes
} = require("sequelize");
const sequelize = require("../config/database");
class LivroCategoria extends Model {}

LivroCategoria.init({
    livroId:{
        type: DataTypes.INTEGER,
        references: {model: 'Livro', key: 'livroId'}
    },
    categoriaId:{
        type: DataTypes.INTEGER,
        references: {model: 'Categoria', key: "categoriaId"}
    }
    },

    {sequelize, modelName: "LivroCategoria"}
)

module.exports = LivroCategoria;
