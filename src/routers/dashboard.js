const express = require('express')
const router = new express.Router()
const Menu = new require('../model/menu')
router.get('/',async (req,res) =>
{
    console.log("inseide dashboard.js")
    try
    {
        const all = await Menu.find() 
        res.status(200).send(all)    
    }
    catch(e)
    {
        res.status(500).send(e)
    }
    
})
module.exports = router