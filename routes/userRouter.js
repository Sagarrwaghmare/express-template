const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
    console.log(" /user")
    res.send(" /users")
})
router.get('/:id',(req,res)=>{
    console.log(`/users/${req.params.id}`)
    res.send(`/users/${req.params.id}`)
})


module.exports = router