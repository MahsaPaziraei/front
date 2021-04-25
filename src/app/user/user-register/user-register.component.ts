import { User } from './../../model/user';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  userSubmitted!: boolean;
  registrationForm!: FormGroup;
  user!:User;
  constructor(private fb:FormBuilder, private userService: UserService) { }

  ngOnInit(): void {
    this.registrationForm = new FormGroup({
        username: new FormControl( null,Validators.required),
        email: new FormControl(null, [Validators.required, Validators.email ]),
        password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
        confirmPassword: new FormControl(null, [Validators.required,this.passwordMatchingValidator]),
        mobile: new FormControl(null, [Validators.required, Validators.maxLength(10)])
      });

    // this.registrationForm = this.fb.group(
    //   {
    //     username: [null, Validators.required],
    //     email: [null, [Validators.required, Validators.email]],
    //     password: [null, [Validators.required, Validators.minLength(8)]],
    //     mobile: [null, [Validators.required, Validators.maxLength(10)]],
    //     confirmPassword: [null, Validators.required],
    //   },{
    //     Validators: this.passwordMatchingValidator
    //   }
    // )
  }

  passwordMatchingValidator(fg:FormGroup): Validators {
return fg.get('password')?.value === fg.get('confirmPassword')?.value ? false  : {notmatched:true}}

  onSubmit(){
    this.userSubmitted= true;
    if (this.registrationForm.valid){
        //  this.user = Object.assign(this.user, this.registrationForm.value);
this.userService.addUser(this.userData)
this.registrationForm.reset()
this.userSubmitted= false;

    }

  }

userData(): User{
  return this.user = {
    username: this.userName.value,
    email: this.userName.value,
    password: this.userName.value,
    mobile: this.userName.value,
  }
}


get userName() {
  return this.registrationForm.get('username') as FormControl;
}

get email() {
  return this.registrationForm.get('email') as FormControl;
}
get password() {
  return this.registrationForm.get('password') as FormControl;
}
get mobile() {
  return this.registrationForm.get('mobile') as FormControl;
}


}
