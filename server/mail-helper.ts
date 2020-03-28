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
        user: '', // User
        pass: '', // Pass
      },
    });

    // Send mail with defined transport object
    let info = null;

    if (postData) {
      info = await transporter.sendMail({
        from: 'info@lenne.tech', // sender address
        to: ['kai.haase@lenne.tech'], // list of receivers
        subject: `Ich bin der Betreff`, // Subject line
        text: `Ich bin der Inhalt`,
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
      message: req.body.message,

      // Both
      privacy: req.body.privacy,
    };

    // Check data
    if (!postData.privacy) {
      res.send(JSON.stringify({ status: 'invalid' }));
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
