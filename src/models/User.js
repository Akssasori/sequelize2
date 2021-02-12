const { Sequelize, Model, DataTypes } = require('sequelize');

const database = 'ship22'
const username = 'root'
const password = 'coti';
const host = 'localhost'
const dialect = 'mysql'


const sequelize = new Sequelize(database, username, password, {
    host: host,
    dialect: dialect
});

const checkcon = async () => {
    try {
        await sequelize.authenticate();
        console.log("conn established");
    } catch (e) {
        console.log(e);
    }
}

checkcon();

class User extends Model {
    static associate(models) {
        //pass
    };
    static init(sequelize){
        super.init(
        {
            name:DataTypes.STRING,
            email:DataTypes.STRING,
            

        },{
            sequelize,
            modelName: "User",
            tableName: "users"
            
        })        
        // return this       
        
    }
    static associate (models){
        this.hasMany(models.Address, { foreignKey: 'userId', as: 'addresses' });
    }
    
}

User.init(sequelize);

module.exports = User;

