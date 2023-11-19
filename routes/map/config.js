const express = require("express")
const router = express.Router()
router.use(express.urlencoded({extended: true}))

router.get("/", (req,res) => {
    res.sendFile(__dirname + "/map_api.html")
})

router.post("/", (req,res) => {
    
})

module.exports = router