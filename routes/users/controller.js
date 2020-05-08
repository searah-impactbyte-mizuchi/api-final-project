const { User } = require("../../models")

module.exports = {
    getAll: async (req,res) => {
        try {
            const result = await User.findAll({})

            res.status(200).json({
                message: "Get All data users",
                data: result,
            })
        } catch (error) {
            console.log(error);
            
        }
    },
    create: async (req,res) => {
        try {
            const {email, password, username, gender} = req.body
            const result = await User.create({
                email, 
                password, 
                username, 
                gender
            }) 

            res.status(200).json({
                message: "Create new data successfully",
                data: result,
            })
        } catch (error) {
            console.log(error);
            
        }
    },
    update: async (req,res) => {
        try {
            const {email, password, username, gender} = req.body
            const {id} = req.params
            const result = await User.update({
                email, 
                password, 
                username, 
                gender
            },
            {
                where: {id:id}
            }) 
            const getAll = await User.findAll({})

            res.status(200).json({
                message: "Update new data successfully",
                data: getAll,
            })
        } catch (error) {
            console.log(error);
            
        }
    }
}