const { Location } = require("../../models")

module.exports = {
    getAll: async (req,res) => {
        try {
            const result = await Location.findAll({})

            res.status(200).json({
                message: "Get All data location",
                data: result,
            })
        } catch (error) {
            console.log(error);
            
        }
    },
    create: async (req,res) => {
        try {
            const {city, scenery, image1, image2} = req.body
            const result = await Location.create({
                city, 
                scenery, 
                image1, 
                image2
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
            const {city, scenery, image1, image2} = req.body
            const {id} = req.params
            const result = await Location.update({
                city, 
                scenery, 
                image1, 
                image2
            },
            {
                where: {id:id}
            }) 
            const getAll = await Location.findAll({})

            res.status(200).json({
                message: "Update new data successfully",
                data: getAll,
            })
        } catch (error) {
            console.log(error);
            
        }
    }
}