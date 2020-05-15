const { User } = require("../../models")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

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
            res.status(401).json({
                message: "Email must be unique",
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
    },
    login: async (req, res) => {
        try {
            const { email, password } = req.body;

            const result = await User.findAll({ where: {email : email} });
            // console.log(result);
            res.status(200).json({
                message: "Update new data successfully",
                data: result,
            })
            
            // const { id } = result;

            // bcrypt.compare(password, result.password).then((response) => {
            //     if (response === true) {
            //         const token = jwt.sign({ id }, SECRET_KEY, {
            //             expiresIn: "1h",
            //         });

            //         res.status(200).send({ token: token });
            //     } else {
            //         res.status(401).send({
            //             message: "Your are not allowed to enter this api",
            //         });
            //     }
            // });
        } catch (error) {
            console.log(error);
        }
    }
}