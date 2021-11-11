import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  loading = false;
  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar) {
    this.form = this.fb.group({
      usuario: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  ingresar() {
    const usuario = this.form.value.usuario;
    const password = this.form.value.password;

    if (usuario == "Israel" && password == "isra123") {
      this.redireccionFake();
    }
    else {
      this.error();
      this.form.reset();
    }
  }
  redireccionFake() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    },1500);
  }

  error() {
    this._snackBar.open('El usuario y la contraseña son incorrectos', '', {
      duration: 4000,
      horizontalPosition: "center",
      verticalPosition: "bottom"
    });
  }
}
