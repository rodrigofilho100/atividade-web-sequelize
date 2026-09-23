const {
Model,
DataTypes
} = require("sequelize");
const sequelize = require("../config/database");
class Categoria extends Model {}

Categoria.init({
    categoriaId:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true
    },
    nome:{
        type: DataTypes.STRING,allowNull: false, unique:true
    },
    descricao:{
        type: DataTypes.TEXT,allowNull: true
    }
},

    {
        sequelize,
        modelName: "Categoria"
        ,
        tableName: "categorias"
}
)
Categoria.belongsToMany(Livro, {through: "LivroCategoria"});
module.exports = Categoria;
