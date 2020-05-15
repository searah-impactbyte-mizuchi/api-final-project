const express = require('express')
const router = express.Router()

const { getAll, create, update, login } = require("./controller")

router.get("/",getAll)
router.post("/",create)
router.post("/login",login)
router.put("/:id", update)

module.exports = router