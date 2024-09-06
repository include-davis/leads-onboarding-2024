import nodemailer from "nodemailer";

const senderEmail = process.env.SENDER_EMAIL; 
const password = process.env.SENDER_PWD; 
const targetEmail = process.env.TARGET_EMAIL; 

export async function contactFormMailer(req, res) {
    if (req.method === "POST") {
        try {
            const {name, email, question } = JSON.parse(req.body);
            const transporter = nodemailer.createTransport({
                host: 'smtp.ethereal.email',
                port: 587,
                auth: {
                    user: senderEmail,
                    pass: password,
                },
            });
            
            const msg = `
            <div class="mail-container">
                <h4>${name} sent you a message:</h4>
                <p>${question}</p><br/>
                <p>By hitting the reply button, it will direct you to reply to the sender: ${email}</p>
            </div>
            <style>
                .mail_container {
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                }
            </style>
            `;
            const mailOptions = {
                from: `${name} <${senderEmail}>`,
                to: targetEmail,
                subject: `Contact Form - ${name} has a question: : ${question.substr(0, 10)}...`,
                replyTo: email,
                html: msg,
              };

              await transporter.sendMail(mailOptions);
              res.status(200).json({ok: true, data:msg, error:null});
        } catch (e){
            res.status(500).json({ok:false, error: e.message});
        }
    }else {
        res.status(405).json({ok:false, data:null, error:"Request method not allowed"})
    }
}

