import * as nodemailer from 'nodemailer';

/**
 * MailHelper class
 */
export class MailHelper {
  // Send mail via MailJet
  static async sendMail(postData) {
    // Create transporter
    const transporter = nodemailer.createTransport({
      host: 'in-v3.mailjet.com',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env['SMTP' + '_USER'], // User
        pass: process.env['SMTP' + '_PW'], // Pass
      },
    });

    // Send mail with defined transport object
    let info = null;

    if (postData.type === 'contact') {
      // if the mail gets send via the contact-page
      info = await transporter.sendMail({
        from: 'noreply@lenne.tech', // sender address
        to: ['lenne.learning@lenne.tech', 'pascal.klesse@lenne.tech'], // list of receivers
        subject: `Neue Kontaktanfrage von ${postData.name}`, // Subject line
        html:
          `<h1>Neue Kontaktanfrage von ${postData.name}:</h1>` +
          `<p><b>E-Mail:</b> ${postData.email}</p>` +
          `<p><b>Name:</b> ${postData.name}</p>` +
          `<p><b>Betreff: </b>${postData.subject}</p>` +
          `<p><b>Nachricht: </b><br>${postData.message}</p>`,
      });
    } else if (postData.type === 'subscription') {
      // if the mail gets send via the subscription-page
      info = await transporter.sendMail({
        from: 'noreply@lenne.tech', // sender address
        to: ['lenne.learning@lenne.tech'], // list of receivers
        subject: `Neue Aboanfrage von ${postData.name}`, // Subject line
        html:
          `<h1>Neue Aboanfrage von ${postData.name}:</h1>` +
          `<p><b>E-Mail:</b> ${postData.email}</p>` +
          `<p><b>Name:</b> ${postData.name}</p>` +
          `<p><b>Abo: </b>${postData.subscription}</p>` +
          `<p><b>Telefon: </b>${postData.phoneNumber}</p>` +
          `<p><b>Unternehmen: </b><br>${postData.company}</p>`,
      });
    }

    // Done
    return info;
  }

  /**
   * Process message
   */
  static async processMessage(req, res) {
    // Get data
    const postData = {
      // Contact
      name: req.body.name,
      email: req.body.email,
      subject: req.body.subject,
      message: req.body.message,
      type: req.body.type,
      dataPolicy: req.body.dataPolicy,
      company: req.body.company,
      phoneNumber: req.body.phoneNumber,

      //Subscription
      subscription: req.body.subscription,
    };

    // Check data
    if (!postData.dataPolicy) {
      res.send(JSON.stringify({ status: 'invalid' }));
      return;
    }

    // TODO: Log result for dev and dont try to send an mail
    if (process.env['NODE' + '_ENV'] === 'development') {
      console.log('postData', postData);
      res.send(JSON.stringify({ status: 'success' }));
      return;
    }

    try {
      await MailHelper.sendMail(postData);
    } catch (error) {
      console.log('Error', error);
      res.send(JSON.stringify({ status: 'error', error: req.app.get('env') === 'development' ? error : {} }));
      return;
    }

    // Everything ok
    res.send(JSON.stringify({ status: 'success' }));
  }
}
