const nodemailer = require("nodemailer");
async function wrapedSendMail(mailOptions){
    return new Promise((resolve,reject)=>{
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.DB_USERID,
          pass: process.env.DB_PASS
        }
    });

 transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log("error is "+error);
       resolve(false); 
    } 
   else {
       console.log('Email sent: ' + info.response);
       resolve(true);
    }
   });
   })
}

    const sendmail= async(req)=>{      
        var mailOptions = {
            from: process.env.DB_FROM,
            to: process.env.DB_TO,
            subject: 'Sending Email using Node.js',
            text: 'Successfully Registered!'
        };
        let resp= await wrapedSendMail(mailOptions);
         return resp;
      } 

module.exports = sendmail;