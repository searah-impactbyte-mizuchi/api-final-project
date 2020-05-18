const { User, Trip } = require("../../models")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

module.exports = {
    getAll: async (req, res) => {
        try {
            const result = await Trip.findAll({})

            res.status(200).json({
                message: "Get all trip data for users",
                data: result,
            })
        } catch (error) {
            console.log(error);

        }
    },
    getBYID: async (req, res) => {
        const { id } = req.params;
        try {
            const result = await Trip.findAll({
                where: {
                    id: id,
                },
                raw: true,
            });

            const membersID = result[0].members.split(",");
            const members = await User.findAll({
                raw: true,
            });
            
            const array = [];
            members.map((item) => {
                membersID.map((id) => {
                    if (item.id == id) {
                        array.push(item);
                    }
                });
            });

            result[0].members = array;

            res.status(200).json({
                message: "Get trip data by ID",
                data: result,
            })
        } catch (error) {
            console.log(error);

        }
    },
    create: async (req, res) => {
        try {
            const { location, destination, from, to, title, description, meetupPoint, user_id, members } = req.body
            const result = await Trip.create({
                location,
                destination,
                from,
                to,
                title,
                description,
                meetupPoint,
                user_id,
                members
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
            const { location, destination, from, to, title, description, meetupPoint } = req.body
            const { id } = req.params
            const result = await Trip.update({
                location,
                destination,
                from,
                to,
                title,
                description,
                meetupPoint,
            },
                {
                    where: {
                        id: id
                    }
                })
            const getAll = await Trip.findAll({})

            res.status(200).json({
                message: "Update new data successfully",
                data: getAll,
            })
        } catch (error) {
            console.log(error);

        }
    },
    deleteByID: async (req, res) => {
        try {
            const { id } = req.params
            // console.log(id);

            const result = await Trip.destroy({
                where: {
                    id: id
                }
            })

            res.status(200).json({
                message: `Trip with id : ${id} is successfully deleted`, 
                data: result
            })
        } catch (error) {
            console.log(error);
        }
    },
    filterByDestination: async (req, res) => {
        try {
            const { destination } = req.params

            const result = await Trip.findAll({
                where : {destination: destination}
            })
            res.status(200).json({
                // message: `Trip with id : ${id} is successfully deleted`, 
                data: result
            })
            
        } catch (error) {
            console.log(error);
        }
    }
    // login: async (req, res) => {
    //     try {
    //         const { email, password } = req.body;

    //         const result = await User.findAll({ where: {email : email} });
    //         // console.log(result);
    //         res.status(200).json({
    //             message: "Update new data successfully",
    //             data: result,
    //         })

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
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }
}