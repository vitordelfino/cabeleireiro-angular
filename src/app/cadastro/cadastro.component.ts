import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CadastroService } from './cadastro.service';
import { MdSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  form: FormGroup;
  formSubmitAttempt: boolean;

  constructor(
    private fb: FormBuilder,
    private _service: CadastroService,
    private _snackBar: MdSnackBar,
    private _router: Router
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      nome: ['', Validators.required],
      cpf: ['', Validators.required]
    });
  }

  isFieldInvalid(field: string) {
    return (
      (!this.form.get(field).valid && this.form.get(field).touched) ||
      (this.form.get(field).untouched && this.formSubmitAttempt)
    );
  }

  onSubmit() {
    if (this.form.valid) {
      this._service
        .save(this.form.value)
        .subscribe(() => {

          this._snackBar
            .open('Cadastro efetuado com sucesso !!!', 'Ok', { duration: 3000 })
              .onAction()
              .subscribe(() => this._router.navigate(['/login']));

        }, erro => {
          console.log(erro);
          this._snackBar
            .open('Erro ao efetuar, tente novamente mais tarde !!!', 'OK', { duration: 3000 });

        })
    }
    this.formSubmitAttempt = true;
  }

}
