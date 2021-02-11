const Address = require('../models/Address');
const User = require('../models/User');

module.exports = {
    async store(req, res){
        const { userId } = req.params;
        const { zipcode, street, number } = req.body;
        // console.log(req.body);
        // console.log(req.params);

        const user = await User.findByPk(userId);
        console.log(user);

        if(!user){
            return res.status(400).json({ error: 'User not found'});
        }

        const address = await Address.create({
            zipcode,
            street,
            number,
            userId,
        });

        return res.json(address);

    }
};