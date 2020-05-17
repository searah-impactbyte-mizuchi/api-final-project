const express = require('express')
const router = express.Router()

const { getAll, create, update, login, getByID } = require("./controller")

router.get("/",getAll)
router.get("/:id",getByID)
router.post("/",create)
router.post("/login",login)
router.put("/:id", update)

module.exports = router