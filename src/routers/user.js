const express = require('express')
const User = require('../model/user')
const router = new express.Router()
router.post('/signUp',async (req,res) =>
{
    try{
        const user = new User(req.body)
        await user.save()
        res.status(200).send(user)
    }
    catch(e)
    {
        res.status(500).send(e)
    }
})
router.post('/login',async (req,res) =>
{   
    const email = req.body.email
    try{
        const user = await User.findOne({email})
        if(!user)
        {
            return res.status(500).send('Unable to login')
        }
        if(user.password.localeCompare(req.password))
        {
            res.status(200).send('User present')
        }
    }
    catch(e)
    {
        res.status(500).send()
    }
})
module.exports = router