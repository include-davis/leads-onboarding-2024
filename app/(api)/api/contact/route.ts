import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const senderUser = process.env.EMAILER_USER;
const senderPassword = process.env.EMAILER_PASSWORD;
const targetEmail = process.env.CONTACT_EMAIL;

export async function POST(req: NextRequest) {
    try {
        // Get contents from request and create transport for email
        const data = await req.formData()
        
        const fname = data.get("fname");
        const lname = data.get("lname");
        const email = data.get("email");
        const question = data.get("question");

        const transporter = nodemailer.createTransport({
            host: 'smtp.ethereal.email',
            port: 587,
            auth: {
                user: senderUser,
                pass: senderPassword,
            }
        });

        const msg = `
            <div class="mail-container">
                <h4>${fname} sent you a message.</h4>
                <p>${question}</p><br/>
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
            from: `${fname} ${lname} <${email}>`,
            to: targetEmail,
            subject: `New contact form from ${fname}`,
            html: msg,
        };
     
        // Send the actual email
        await transporter.sendMail(mailOptions);
        return NextResponse.json(
            { ok: true, data: 'Email sent successfully!', error: null }, 
            {status: 200}
        );
  
    } catch (e) {
        return NextResponse.json(
            { ok: false, data: null, error: e.message}, 
            {status: 500}
        );
    }
}