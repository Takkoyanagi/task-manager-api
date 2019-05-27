const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'tak.koyanagi@gmail.com',
        subject: 'Thanks for joining',
        text: `Welcome to the app, ${name}. Let me know how you feel about the app`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'tak.koyanagi@gmail.com',
        subject: 'We are sorry to see you leave',
        text: `We are sorry to see you leave the app, ${name}. Any feedback to improve our services will be greatly appreciated!`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}