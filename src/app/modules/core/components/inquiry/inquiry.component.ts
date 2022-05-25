import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NbDialogRef } from '@nebular/theme';
import { DialogModeEnum } from '../../enumerators/dialog-mode.enum';
import { DialogService } from '../../services/dialog.service';
import { FormsService } from '../../services/forms.service';
import { MailService } from '../../services/mail.service';

@Component({
  selector: 'app-inquiry',
  templateUrl: './inquiry.component.html',
  styleUrls: ['./inquiry.component.scss'],
})
export class InquiryComponent implements OnInit {
  DialogModeEnum = DialogModeEnum;
  contactForm: FormGroup;
  isLoading = false;
  error = false;
  @Input() subscription: string;
  dataPolicy =
    'Ich habe die <a href="/datenschutz" target="_blank">Datenschutzerklärung</a> zur Kenntnis genommen. Ich stimme zu, dass meine Angaben und Daten zur Beantwortung meiner Anfrage elektronisch erhoben und gespeichert werden. Hinweis: Du kannst Deine Einwilligung jederzeit für die Zukunft per E-Mail an <a href="mailto:info@lenne.tech">info@lenne.tech</a> widerrufen. *';

  constructor(
    private mailService: MailService,
    private formsService: FormsService,
    private router: Router,
    private dialogService: DialogService,
    protected dialogRef: NbDialogRef<any>
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.contactForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      phoneNumber: new FormControl(null),
      company: new FormControl(null),
      dataPolicy: new FormControl(false, [Validators.requiredTrue]),
    });
    if (!this.subscription.toLowerCase().includes('workshop')) {
      this.contactForm.controls['company'].setValidators([Validators.required]);
    } else {
      this.contactForm.controls['company'].setValidators(null);
    }
  }

  contact(): void {
    if (this.contactForm.invalid) {
      this.formsService.validateAllFormFields(this.contactForm);
      return;
    }
    this.isLoading = true;
    //declare type for the email-output
    this.contactForm.value.type = 'subscription';
    this.contactForm.value.subscription = this.subscription;
    this.mailService.sendMail(this.contactForm.value).subscribe({
      next: () => {
        this.dialogRef.close();
        this.dialogService.openMailSentDialog();
      },
      error: () => {
        this.error = true;
        this.isLoading = false;
        setTimeout(() => {
          this.error = false;
        }, 3000);
      },
      complete: () => {
        this.isLoading = false;
        this.contactForm.reset();
      },
    });
  }
}
