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
 * Get Request for getting the id and the status of one email
 */
router.get("/:id", async (req, res) => {
    const email = await Email.findOne({ _id: req.params.id })
    .then(res.send({id: req.params.id , status: "Sent"}))
    .catch(res.send({ id: req.params.id , status: "Failed"}))
	//res.send(email)
})

/**
 *Post request to create a new email and getting its status
 */
router.post('/', async (req, res) => {   
	try{const email = new Email({
		email: req.body.email,
        content: req.body.content,
        subject: req.body.subject
	})
	await email.save()
    res.send({  status: "SENT"})
    }catch{
    res.send({  status: "FAILED"})
}
});


/**
 * Delete request to delete an email and get its id and status
 */
router.delete("/:id", async (req, res) => {
	try {
		await Email.deleteOne({ _id: req.params.id })
        res.send({ id: req.params.id , status: "The email has been successfully Deleted" })
	} catch {
		res.status(404)
		res.send({ id: req.params.id , status: "Failed to delete the email or the email does not exist"})
	}
})

/**
 * const response1 = new Resp(req.params.id,SENT) 
const response2 = new Resp(req.params.id,QUEUED) 
const response3 = new Resp(req.params.id,FAILED)
 */ 





module.exports = router;