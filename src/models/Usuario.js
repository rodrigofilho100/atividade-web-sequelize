// extra

const {Model, DataTypes} = require("sequelize");
const sequelize=require("../config/database");

class Usuario extends Model{}

Usuario.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
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
    senha:{
        type: DataTypes.STRING,
        allowNull: false
    }
},
    {sequelize, modelName: "Usuario", tableName: "usuarios"}
)
module.exports=Usuario;