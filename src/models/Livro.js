const Autor=require("./Autor");
const {
    Model,
    DataTypes
} = require("sequelize");
const sequelize = require("../config/database");

class Livro extends Model{}

Livro.init({
  livroId:{
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  titulo:{
    type: DataTypes.STRING,
    allowNull: false
  },
  isbn:{
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  ano:{
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue:true
  },
  disponivel:{
    type: DataTypes.BOOLEAN,
    defaultValue: true,
    allowNull: false
  },
  autorId:{
    type: DataTypes.INTEGER,
    references:{
      // por algum motivo o sequelize confunde model com table, então coloquei autores em vez de Autor
      model: 'autores', 
      key: 'autorId'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
    allowNull: false
  }
},
    {
        sequelize,
        modelName: "Livro"
        ,
        tableName: "livros"
}
);
module.exports = Livro;
