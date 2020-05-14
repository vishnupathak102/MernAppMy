
const express = require('express');

const router = express.Router();
const User = require('../models/user');

router.get('/',(req,res)=>{
    console.log("ckejfj")
   User.find()
   .then((users)=>{
      res.json(users);
   })
   .catch((err)=>{
       res.send(err)
   })
})


router.post('/',(req,res)=>{
    const newUser = new User({username:req.body.username});
    newUser.save()
    .then((users)=>{
       res.json(users)
    }).catch((err)=>{
        res.send(err)
    })
})


module.exports = router;