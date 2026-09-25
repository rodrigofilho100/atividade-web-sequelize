const {
Model,
DataTypes
} = require("sequelize");
const sequelize = require("../config/database");

class LivroCategoria extends Model {}

LivroCategoria.init({
    livroId:{
        type: DataTypes.INTEGER,
        references: {model: 'livros', key: 'livroId'}
    },
    categoriaId:{
        type: DataTypes.INTEGER,
        references: {model: 'categorias', key: "categoriaId"}
    }
    },

    {sequelize, modelName: "LivroCategoria", tableName: "livrosCategorias"}
)

module.exports = LivroCategoria;
