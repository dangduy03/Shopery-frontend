import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string | undefined;
  password: string | undefined;

  constructor(private router: Router) { }

  async onSumbit() {
    console.log('Login From Sumnitted');
    // Thực hiện xử lý đăng nhập ở đây
    try {
      const data = {
        username: this.username,
        password: this.password,
      };
      const response = await axios.post("http://localhost:8080/auth/login", data);
      if (response.status == 200)
        this.router.navigate(['/home']);
    } catch (error) {
      alert("Username and password wrong or api error");
    }






  }
}