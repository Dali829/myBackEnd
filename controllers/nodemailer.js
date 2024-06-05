const nodemailer = require("nodemailer");


const nodemailer = async()=>{


    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true, // Use `true` for port 465, `false` for all other ports
        auth: {
          user: "maddison53@ethereal.email",
          pass: "jn7jnAPss4f63QBp6D",
        },
      });
      const message = {
          from: '"Maddison Foo Koch 👻" <maddison53@ethereal.email>', // sender address
          to: "bar@example.com, baz@example.com", // list of receivers
          subject: "Hello ✔", // Subject line
          text: "Hello world?", // plain text body
          html: "<b>Hello world?</b>", // html body
        }
       await transporter.sendMail(message,(err,info)=>{
          if(err){
              console.log(err)
          }else {
              console.log('mail sent'+info.response)
          }
      });
}
module.exports={
nodemailer
}