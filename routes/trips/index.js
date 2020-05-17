const express = require('express')
const router = express.Router()

const { create, update, getAll, deleteByID} = require("./controller")

router.get("/",getAll)
router.post("/",create)
router.put("/:id", update)
router.delete("/:id", deleteByID)

module.exports = router