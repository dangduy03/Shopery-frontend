import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import axios from 'axios';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports:[FormsModule, RouterLink],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignUpComponent {

  username: string | undefined;
  fullname: String | undefined;
  gender: String | undefined;
  phoneNumber: String | undefined;
  email: String | undefined;
  password: String | undefined;

  constructor(private router: Router) { }


  async onSumbit () {
    console.log('SignUp Form Sumbitted')
    // Thực hiện xử lý đăng ky ở đây

    try {
      const data = {
        username: this.username,
        fullName:this.fullname,
        gender:this.gender,
        phoneNumber:this.phoneNumber,
        email:this.email,
        password: this.password,
      };
      const response = await axios.post("http://localhost:8080/auth/signup", data);
      console.log(response);
      if (response.status == 200)
        this.router.navigate(['/']);
    } catch (error) {
      alert("wrong or api error");
    }

  }

}
