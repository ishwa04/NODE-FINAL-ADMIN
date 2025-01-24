const nodemailer = require("nodemailer");

const transport = nodemailer.createTransport ({
    service: "gmail" , 
    auth:{
        user:"ishwakorat4444@gmail.com" ,
        pass: "onadsstrgdifokwi"
    },
});

module.exports.sendOtp = (to,otp) => {
    let mailOption ={
        from: "ishwakorat4444@gmail.com",
        to:to,
        subject: "Your OTP is Here",
        text: `Your OTP is ${otp}`,
    };

    transport.sendMail(mailOption,(err)=>{
        err && console.log(err);
        
    });
};