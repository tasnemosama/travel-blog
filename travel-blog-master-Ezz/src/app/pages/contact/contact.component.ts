import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-contact',
  imports: [FormsModule], 
  standalone: true,

  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  name: string = '';
  email: string = '';
  subject: string = '';
  message: string = '';

  onSubmit() {
    console.log('Form Submitted', {
      name: this.name,
      email: this.email,
      subject: this.subject,
      message: this.message
    });
    alert('Message Sent Successfully!');
  }
}
