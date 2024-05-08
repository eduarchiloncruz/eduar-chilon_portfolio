export interface Email {
  recipient: string;
  subject: string;
  content: string;
}

export interface EmailForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}
