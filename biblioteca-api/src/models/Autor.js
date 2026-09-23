const {
    Model,
    DataTypes
} = require("sequelize");

const sequelize = require("../config/database");

class Autor extends Model{}

Autor.init({
  autorId:{
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nome:{
    type: DataTypes.STRING,
    allowNull: false
  },
  email:{
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {isEmail: true}
  },
  nacionalidade:{
    type: DataTypes.STRING,
    allowNull: true
  }
},
    {
        sequelize,
        modelName: "Autor"
        ,
        tableName: "autores"
}
);
Autor.hasMany(Livro, {foreignKey: "autorId"});
module.exports = Autor;
