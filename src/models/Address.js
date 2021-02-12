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

class Address extends Model {
    static associate(models) {
        //pass
    };
    static init(sequelize){
        super.init(
        {
            userId: DataTypes.INTEGER,
            zipcode:DataTypes.STRING,
            street:DataTypes.STRING,
            number:DataTypes.INTEGER,

        },{
            sequelize,
            // modelName: "Address",
            // tableName: "addresses"
        })        
        // return this       
        
    }
    static associate (models){
        this.belongsTo(models.User, { foreignKey:'userId', as: 'user'})
    }
    
    
}

Address.init(sequelize);

module.exports = Address;

