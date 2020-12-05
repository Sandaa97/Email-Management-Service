const { response, json } = require('express');
const express = require('express');
const router = express.Router();
const Email = require('../models/emails');
//const Resp = require('../response');




/**
 * Get request to get all emails
 */
router.get('/', async(req,res) => {
    try{
        const emails = await Email.find()
        res.json(emails);

    }
    catch(err){
        res.send('Error '+err);
    }
});
/**
 * Get Request for getting one email
 */
router.get("/:id", async (req, res) => {
    const email = await Email.findOne({ _id: req.params.id })
    .then(res.send())
    .catch()
	res.send(email)
})

/**
 *Post request to creat a new email
 */
router.post('/', async (req, res) => {   
	const email = new Email({
		email: req.body.email,
        content: req.body.content,
        subject: req.body.subject
	})
	await email.save()
	res.send(email)
});


/**
 * Delete request to delete an email
 */
router.delete("/:id", async (req, res) => {
	try {
		await Email.deleteOne({ _id: req.params.id })
        res.send()
	} catch {
		res.status(404)
		res.send({ error: "Post doesn't exist!" })
	}
})

/**
 * const response1 = new Resp(req.params.id,SENT) 
const response2 = new Resp(req.params.id,QUEUED) 
const response3 = new Resp(req.params.id,FAILED)
 */ 





module.exports = router;