import { Component } from '@angular/core';
import { DespesaService } from 'src/app/services/despesa.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IDespesa } from 'src/app/interface/despesa';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-despesas',
  templateUrl: './editar-despesas.component.html',
  styleUrls: ['./editar-despesas.component.css']
})
export class EditarDespesasComponent {

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

  despesaId: number | undefined;
  despesaIdStr = '';

  ngOnInit() {
    this.despesaIdStr = this.route.snapshot.paramMap.get('id')!;
    this.despesaId = Number(this.despesaIdStr);
    if (this.despesaId) {
      this.despesaService.buscarDespesaPorId(this.despesaId!).subscribe(
        (despesa: IDespesa) => {
          this.despesaForm.setValue({
            nome: despesa.nome,
            categoria: despesa.categoria,
            data: despesa.data,
            valor: despesa.valor
          });
        },
        (error) => {
          Swal.fire({
            icon: 'error',
            title: 'Erro 404',
            text: 'Despesa não localizada',
          });
        }
      );
    }
  }

  atualizar() {
    const despesa: IDespesa = this.despesaForm.value as IDespesa;
      if (despesa.id !== this.despesaId) {
        Swal.fire({
          icon: 'error',
          title: 'Erro',
          text: 'Não é permitido alterar o Id da despesa.',
        });
        return;
      }
      this.despesaService.editarDespesa(this.despesaId, despesa).subscribe(
        (result) => {
          Swal.fire(
            'Despesa atualizada',
            'Informações da despesa atualizadas.',
            'success'
          );
          this.router.navigate(['/despessas']);
        },
        (error) => {
          switch (error.status) {
            case 400:
              Swal.fire({
                icon: 'error',
                title: 'Erro',
                text: error.error.errors[0].defaultMessage,
              });
              break;
            case 404:
              Swal.fire({
                icon: 'error',
                title: 'Erro',
                text: error.error.message,
              });
              break;
          }
        }
      );

    }

}
