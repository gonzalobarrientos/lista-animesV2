import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AutenticacionService } from './autenticacion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  public loginInvalid = false;
  private formSubmitAttempt = false;
  private returnUrl: string;

  constructor(private fb: FormBuilder,
    private router: Router,
    private authService: AutenticacionService) { 
      this.form = this.fb.group({
        email: ['', Validators.email],
        password: ['', Validators.required]
      })
    }

  async ngOnInit(): Promise<void> {
    if(await this.authService.verificarLogin()){
      await this.router.navigate([this.returnUrl]);
    }
  }

  async submit(): Promise<void>{
    this.loginInvalid = false;
    this.formSubmitAttempt = false;
    if (this.form.valid) {
      try {
        const email = this.form.get('email')?.value;
        const password = this.form.get('password')?.value;
        this.authService.login(email, password).subscribe((resp: any) => {
          const nombresUsuario = resp[0].nombres;
          const apellidoP = resp[0].apellidoPaterno;
          const apellidoM = resp[0].apellidoMaterno;
          sessionStorage.setItem("token", "tokensecreto");
          sessionStorage.setItem("nombresUsuario", nombresUsuario);
          sessionStorage.setItem("apellidoP", apellidoP);
          sessionStorage.setItem("apellidoM", apellidoM);
          sessionStorage.setItem("isLogged", "true");
          this.router.navigate(["/inicio"]);
        });
      } catch (err) {
        this.loginInvalid = true;
      }
    } else {
      this.formSubmitAttempt = true;
    }
  }

}
