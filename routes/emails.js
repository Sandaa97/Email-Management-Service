const express = require('express');
const router = express.Router();
const Email = require('../models/emails');

router.get('/', async(req,res) => {
    try{
        const emails = await Email.find()
        res.json(emails);

    }
    catch(err){
        res.send('Error '+err);
    }
});

router.post('/',()=>{
    try {
        async(req,res) => {
            const email = new Email({
                email: req.body.email,
                content: req.body.content,
                subject: req.body.subject
            });
   
                const a1 = await email.save();
                res.json(a1);
  }
    } catch (error) {
    res.send('Error');
}
});


module.exports = router;