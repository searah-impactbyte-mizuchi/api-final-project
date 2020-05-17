const express = require('express')
const router = express.Router()

const { create, update, getAll, deleteByID, getBYID} = require("./controller")

router.get("/",getAll)
router.post("/",create)
router.put("/:id", update)
router.delete("/:id", deleteByID)
router.get("/:id", getBYID)

module.exports = router