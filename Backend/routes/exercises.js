
const express = require('express');

const router = express.Router();
const Exercise = require('../models/exercise');

router.get('./',(req,res)=>{
    Exercise.find()
   .then((exercise)=>{
      res.json(exercise);
   })
   .catch((err)=>{
       res.send(err)
   })
})


router.post('./',(req,res)=>{
    const newexErcise = new Exercise({exercisename:req.body.exercisename});
    newexErcise.save()
    .then((exercise)=>{
       res.json(exercise)
    }).catch((err)=>{
        res.send(err)
    })
})


module.exports = router;