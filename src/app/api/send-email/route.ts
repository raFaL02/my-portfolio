import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  try {
    const toEmail = process.env.EMAIL_TO_SEND!;
    const data = await resend.emails.send({
      from: "Portfólio Rafael <oneboarding@resend.dev>",
      to: toEmail,
      subject: "Nova mensagem no seu portfólio",
      html: `
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensagem:</strong><br/>${message}</p>
      `,
    });

    return Response.json({ success: true, data });
  } catch (error) {
    console.error(error);
    return Response.json({ success: false, error });
  }
}
