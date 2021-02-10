const { Model, DataTypes, Sequelize } = require('sequelize');


class User extends Model {
    static init(sequelize){
        super.init(
        {
            name:DataTypes.STRING,
            email:DataTypes.STRING,

        },{
            sequelize

        })
        
        // return this       
        
    };
    
    
}


module.exports = User;