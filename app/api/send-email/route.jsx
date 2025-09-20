import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { name, email, mobile } = await req.json();

    await resend.emails.send({
      from: 'onboarding@resend.dev', // Use verified domain/email
      to: 'snjsathu@gmail.com', // where you want to receive submissions
      subject: 'New Partner Form Submission',
      html: `
        <h2>New Partner Form Submission</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Mobile Number:</b> ${mobile}</p>
      `
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error(error);
    return Response.json({ success: false, error }, { status: 500 });
  }
}
