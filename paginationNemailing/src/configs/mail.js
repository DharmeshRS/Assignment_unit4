const nodemailer=require('nodemailer')

module.exports= nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    secure: false, // true for 465, false for other ports
    auth: {
        user: "8679bb224e1d60",
        pass: "5d0f1f50a1e988"
    },
  });