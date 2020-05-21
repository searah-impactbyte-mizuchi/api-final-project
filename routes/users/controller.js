const { User } = require("../../models")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

module.exports = {
    getAll: async (req, res) => {
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
    getByID: async (req, res) => {
        const { id } = req.params
        try {
            User.belongsTo(trips_created, { foreignKey: "id" });
            // User.hasOne(Trip, { foreignKey: "id" });
         
            const result = await Trip.findAll({
                include: [{ model: trips_created }],
                where: {
                    id: id,
                },
                raw: true,
            });

            res.status(200).json({
                message: "Get All data users",
                data: result,
            })
        } catch (error) {
            console.log(error);

        }
    },
    create: async (req,res) => {
        
        const result = await User.findOne({email : email });
        if (result) return res.status(401).send("Your email has already registered");
        try {
            const { email, password, username, gender, avatar, city, about, age, trips_created, } = req.body
            const result = await User.create({
                email,
                password,
                username,
                gender,
                avatar,
                city,
                about,
                age,
                trips_created,
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
    update: async (req, res) => {
        try {
            const { email, password, username, gender, avatar, city, about, age, trips_created } = req.body
            const { id } = req.params
            const result = await User.update({
                email,
                password,
                username,
                gender,
                avatar,
                city,
                about,
                age,
                trips_created,
            },
                {
                    where: { id: id }
                })
            const getAll = await User.findAll({
                where: { id: id }
            })

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

            const result = await User.findAll({
                where: {
                    email: email,
                    password: password
                }
            });
            console.log(result.length);
            
            if (result.length === 0) {
                res.status(401).send({
                    message: "Your email not registered"
                })
            }
            else {
                res.status(200).json({
                    message: "Update new data successfully",
                    data: result,
                })
            }
            // console.log(result);



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
            res.status(401).send({
                message: "Your password not match",
            });
            console.log(error);
        }
    }
}