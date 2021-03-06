import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DialogService } from '../../services/dialog.service';
import { FormsService } from '../../services/forms.service';
import { MailService } from '../../services/mail.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent implements OnInit {
  @Input() content;
  contactForm: FormGroup;
  isLoading = false;
  error = false;

  constructor(
    private mailService: MailService,
    private formsService: FormsService,
    private dialogService: DialogService
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.contactForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      subject: new FormControl(null, [Validators.required]),
      message: new FormControl(null, [Validators.required]),
      dataPolicy: new FormControl(false, [Validators.requiredTrue]),
    });
  }

  contact(): void {
    if (this.contactForm.invalid) {
      this.formsService.validateAllFormFields(this.contactForm);
      return;
    }
    this.isLoading = true;
    //declare type for the email-output
    this.contactForm.value.type = 'contact';
    this.mailService.sendMail(this.contactForm.value).subscribe({
      next: () => {
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
