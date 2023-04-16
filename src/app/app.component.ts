import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'remember-me';
  rememberMe: boolean = false;
ngOnInit() {
     this.rememberMe = false;
     this.AutoLogin();
    }

    onSubmit() {
    this.auth.login(this.loginForm.value).subscribe((res) => {
      localStorage.setItem('token', res['accessToken']);
      localStorage.setItem('name', res['name']);
      localStorage.setItem('role', res['role']);
      localStorage.setItem('email', res['email']);
      localStorage.setItem('userId', res['userId']);
      // Save value to local storage
      if(rememberMe) {
        localStorage.setItem('rememberMe', 'yes')
      }
      // this.toastrService.success('Successfully Login!');
      // this.router.navigate(['/home']);
    },
    (err) => {

    });
  }

    AutoLogin(){
        const accessTokenObj = localStorage.getItem("token");
        // Retrieve rememberMe value from local storage
        const rememberMe = localStorage.getItem('rememberMe');
    console.log(accessTokenObj);
        if (accessTokenObj && rememberMe == 'yes') {
          this.router.navigate(['/home']);
        } else {
          console.log("You need to login")
        }
       }
}
