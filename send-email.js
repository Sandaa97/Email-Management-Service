const nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
   service:'gmail',
   auth: {
       user: 'testmystuffhsm@gmail.com',
       pass:'sanda1234'
   } 
});

var mailOptions = {
    from: 'testmystuffhsm@gmail.com',
    to: 'testingcode97@gmail.com',
    subject:'Re: Email',
    text:'Your email has been recieved by Different Technologies. Stay tuned for more updates.'
}

transporter.sendMail(mailOptions, function(error,info){
    if(error){
        console.log(error);
    }else{
        console.log('Email Sent: '+ info.response);
    }

});

module.exports = transporter.sendMail;