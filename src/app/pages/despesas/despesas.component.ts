import { Component } from '@angular/core';
import { IDespesa } from 'src/app/interface/despesa';
import { DespesaService } from 'src/app/services/despesa.service';

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
}
