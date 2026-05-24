import nodemailer from 'nodemailer';

//get email and password from .env file
const email = process.env.EMAIL;
const pass = process.env.EMAIL_PASS;

export async function POST(request) {
  const {
    name,
    userEmail,
    phone,
    message,
    subject,
    first_touch_utm_source,
    first_touch_utm_medium,
    first_touch_utm_campaign,
    first_touch_utm_content,
    first_touch_utm_term,
    first_touch_landing_page,
    first_touch_referrer,
    first_touch_timestamp,
    latest_touch_utm_source,
    latest_touch_utm_medium,
    latest_touch_utm_campaign,
    latest_touch_utm_content,
    latest_touch_utm_term,
    latest_touch_landing_page,
    latest_touch_referrer,
    latest_touch_timestamp,
    current_page,
  } = await request.json();

  const finalSubject = subject
    ? `Query for${subject} from ${name}`
    : `New query from ${name}`;

  const utmSection = `
=== First-Touch Attribution ===
First Touch UTM Source: ${first_touch_utm_source || 'N/A'}
First Touch UTM Medium: ${first_touch_utm_medium || 'N/A'}
First Touch UTM Campaign: ${first_touch_utm_campaign || 'N/A'}
First Touch UTM Content: ${first_touch_utm_content || 'N/A'}
First Touch UTM Term: ${first_touch_utm_term || 'N/A'}
First Touch Landing Page: ${first_touch_landing_page || 'N/A'}
First Touch Referrer: ${first_touch_referrer || 'N/A'}
First Touch Timestamp: ${first_touch_timestamp || 'N/A'}

=== Latest-Touch Attribution ===
Latest Touch UTM Source: ${latest_touch_utm_source || 'N/A'}
Latest Touch UTM Medium: ${latest_touch_utm_medium || 'N/A'}
Latest Touch UTM Campaign: ${latest_touch_utm_campaign || 'N/A'}
Latest Touch UTM Content: ${latest_touch_utm_content || 'N/A'}
Latest Touch UTM Term: ${latest_touch_utm_term || 'N/A'}
Latest Touch Landing Page: ${latest_touch_landing_page || 'N/A'}
Latest Touch Referrer: ${latest_touch_referrer || 'N/A'}
Latest Touch Timestamp: ${latest_touch_timestamp || 'N/A'}

=== Page Info ===
Current Page: ${current_page || 'N/A'}
`.trim();

  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: email,
      pass: pass,
    },
  });

  const mailOptions = {
    from: email,
    to: 'srgroupwebmaster@gmail.com',
    subject: `${finalSubject}`,
    text: `Name: ${name}\nEmail: ${userEmail}\nPhone: ${phone}\nMessage: ${message}\n\n${utmSection}`,
    html: `
      <h1>New query from ${name} for ${subject}</h1>
      <p>Email: ${userEmail}</p>
      <p>Phone: ${phone}</p>
      <p>Message: ${message}</p>
      <hr/>
      <h2>First-Touch Attribution</h2>
      <p><strong>UTM Source:</strong> ${first_touch_utm_source || 'N/A'}</p>
      <p><strong>UTM Medium:</strong> ${first_touch_utm_medium || 'N/A'}</p>
      <p><strong>UTM Campaign:</strong> ${first_touch_utm_campaign || 'N/A'}</p>
      <p><strong>UTM Content:</strong> ${first_touch_utm_content || 'N/A'}</p>
      <p><strong>UTM Term:</strong> ${first_touch_utm_term || 'N/A'}</p>
      <p><strong>Landing Page:</strong> ${first_touch_landing_page || 'N/A'}</p>
      <p><strong>Referrer:</strong> ${first_touch_referrer || 'N/A'}</p>
      <p><strong>Timestamp:</strong> ${first_touch_timestamp || 'N/A'}</p>
      <hr/>
      <h2>Latest-Touch Attribution</h2>
      <p><strong>UTM Source:</strong> ${latest_touch_utm_source || 'N/A'}</p>
      <p><strong>UTM Medium:</strong> ${latest_touch_utm_medium || 'N/A'}</p>
      <p><strong>UTM Campaign:</strong> ${latest_touch_utm_campaign || 'N/A'}</p>
      <p><strong>UTM Content:</strong> ${latest_touch_utm_content || 'N/A'}</p>
      <p><strong>UTM Term:</strong> ${latest_touch_utm_term || 'N/A'}</p>
      <p><strong>Landing Page:</strong> ${latest_touch_landing_page || 'N/A'}</p>
      <p><strong>Referrer:</strong> ${latest_touch_referrer || 'N/A'}</p>
      <p><strong>Timestamp:</strong> ${latest_touch_timestamp || 'N/A'}</p>
      <hr/>
      <p><strong>Current Page:</strong> ${current_page || 'N/A'}</p>
    `,
  };

  try {
    // Send the email
    await transporter.sendMail(mailOptions);
    return new Response('Email sent successfully', { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response('Error sending email', { status: 500 });
  }
}
