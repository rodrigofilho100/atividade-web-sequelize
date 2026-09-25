// extra
const {Model, DataTypes} = require("sequelize");
const sequelize=require("../config/database");

class Emprestimo extends Model{}

Emprestimo.init({
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    usuarioId:{
        type: DataTypes.INTEGER,
        references:{
            model: "usuarios",
            key: "id"
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false
    },
    livroId:{
        type: DataTypes.INTEGER,
        references:{
            model: "livros",
            key: "livroId"
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false
    },
    dataEmprestimo:{
        type: DataTypes.DATE,
        allowNull: false
    },
    dataDevolucao:{
        type: DataTypes.DATE,
        allowNull: false
    },
    status:{
        type: DataTypes.STRING,
        allowNull: false
    }
},
    {sequelize, modelName: "Emprestimo", tableName: "emprestimos"}
)
module.exports=Emprestimo;