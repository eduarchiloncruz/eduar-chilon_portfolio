import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ContactService } from '../../services/contact/contact.service';
import { EmailForm } from '../../core/models/email.model';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent implements OnInit {
  contactForm = this.formBuilder.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    subject: ['', [Validators.required]],
    message: ['', [Validators.required]],
  });

  isSending: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private contactService: ContactService,
    private messageService: MessageService
  ) {}

  get name() {
    return this.contactForm.controls?.name;
  }

  get email() {
    return this.contactForm.controls?.email;
  }

  get subject() {
    return this.contactForm.controls?.subject;
  }

  get message() {
    return this.contactForm.controls?.message;
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.contactForm.valid) {
      this.isSending = true;
      this.contactService
        .sendEmail(this.contactForm.value as EmailForm)
        .subscribe({
          next: (res: any) => {
            this.showSuccess(true);
            this.isSending = false;
            this.contactForm.reset();
            return res;
          },
          error: (err: any) => {
            this.showSuccess(false);
            this.isSending = false;
            return err;
          },
        });
    } else {
      this.contactForm.markAllAsTouched();
    }
  }

  showSuccess(isSended: boolean) {
    const success: any = {
      severity: 'success',
      summary: 'Success',
      detail: 'Email sent successfully!',
    };

    const error: any = {
      severity: 'error',
      summary: 'Error',
      detail: 'Failed to send email. Please try again.',
    };

    this.messageService.add(isSended ? success : error);
  }
}
