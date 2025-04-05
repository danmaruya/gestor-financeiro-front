import { Component } from '@angular/core';
import { IDespesa } from 'src/app/interface/despesa';
import { DespesaService } from 'src/app/services/despesa.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-despesas',
  templateUrl: './despesas.component.html',
  styleUrls: ['./despesas.component.css']
})
export class DespesasComponent {
  despesa: IDespesa[] = [];
  constructor(private despesaService: DespesaService) {}

  ngOnInit() {
    this.despesaService.retornarTodasAsDespesas().subscribe((result: IDespesa[]) => {
      this.despesa = result;
    });
  }

  deletar(despesa: IDespesa) {
    Swal.fire({
      title: 'Exclusão de despesa do sistema',
      text: 'Deseja excluir a despesa?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sim',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.despesaService.deletarDespesa(despesa.idDespesa)
        .subscribe(
          () => {
          this.despesaService.retornarTodasAsDespesas().subscribe((result: IDespesa[]) => {
            this.despesa = result;
          });
          Swal.fire({
            title: 'Exclusão realizada',
            text: 'Despesa excluida com sucesso',
            icon: 'success'
          });
        }, (error) => {
          Swal.fire({
            title: 'Erro ao excluir',
            text: 'Ocorreu um erro ao excluir a Despesa',
            icon: error.error.message
          });
        });
        }
      });
  }
}
