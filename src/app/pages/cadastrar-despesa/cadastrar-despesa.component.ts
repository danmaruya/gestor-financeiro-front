import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IDespesa } from 'src/app/interface/despesa';
import { DespesaService } from 'src/app/services/despesa.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cadastrar-despesa',
  templateUrl: './cadastrar-despesa.component.html',
  styleUrls: ['./cadastrar-despesa.component.css']
})
export class CadastrarDespesaComponent {
clienteForm: any;
  constructor(
    private despesaService: DespesaService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  despesaForm = new FormGroup({
    nome: new FormControl('', Validators.required),
    categoria: new FormControl('', Validators.required),
    data: new FormControl('', Validators.required),
    valor: new FormControl(0, Validators.required),
  });

  cadastrar() {
    const despesa: IDespesa = this.despesaForm.value as IDespesa;
      this.despesaService.cadastrarDespesa(despesa).subscribe(
        (result) => {
          Swal.fire(
            'Despesa cadastrada',
            'Despesa cadastrada com sucesso.',
            'success'
          )
        },
        (error) => {
          if (error.error.errors[0]) {
            Swal.fire({
              icon: 'error',
              title: 'Erro',
              text: error.error.errors[0].defaultMessage,
            });
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Erro',
              text: error.error.message,
            });
          }
        }
      )
  }
}
