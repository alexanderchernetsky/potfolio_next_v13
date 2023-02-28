import nodemailer from "nodemailer";

const myGmailPass = process.env.GMAIL_PASSWORD;

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "alexvnderchernetsky@gmail.com",
    pass: myGmailPass
  }
});

const mailer = ({ senderMail, name, text, recipientMail }) => {
  const from =
    name && senderMail ? `${name} <${senderMail}>` : `${name || senderMail}`;
  const message = {
    from,
    to: `${recipientMail}`,
    subject: `New message from ${from}`,
    text,
    replyTo: from
  };

  try {
    return transporter.sendMail(message);
  } catch (error) {
    console.error('Failed to send email', error);
    return error;
  }
};

// next.js v13 Route Handler
export async function POST(req, res) {
  const data = await req.json();
  const { senderMail, fullName, message, recipientMail } = data;

  // Check if fields are all filled
  if (!senderMail || !fullName || !message || !recipientMail) {
    return new Response('Forbidden. Not all necessary fields are filled!', {
      status: 403
    });
  }

  const mailerResponse = await mailer({
    senderMail,
    name: fullName,
    text: message,
    recipientMail
  });

  return new Response(JSON.stringify(mailerResponse), {
    status: 200
  });
}
