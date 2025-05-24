import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { DespesaService } from 'src/app/services/despesa.service';

@Component({

  selector: 'app-relatorio',
  template: `
    <button (click)="gerarRelatorio()" [disabled]="loading">
      <span *ngIf="!loading">Download Relatório Excel</span>
      <span *ngIf="loading">Gerando relatório...</span>
    </button>
    <div *ngIf="error" class="error-message">{{error}}</div>
  `,
  styles: [`
    button {
      padding: 10px 15px;
      background-color: #4CAF50;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    button:disabled {
      background-color: #cccccc;
      cursor: not-allowed;
    }
    .error-message {
      color: #d32f2f;
      margin-top: 10px;
    }
  `],

  providers: [DatePipe]
})
export class RelatorioComponent {
  @Input() dataInicio?: string;
  @Input() dataFim?: string;

  loading = false;
  error: string | null = null;

  constructor(private datePipe: DatePipe, private despesaService: DespesaService) {}

  gerarRelatorio() {
    const dataInicioFormatada = this.dataInicio
    ? this.datePipe.transform(this.dataInicio, 'dd/MM/yyyy') || undefined
    : undefined;

  const dataFimFormatada = this.dataFim
    ? this.datePipe.transform(this.dataFim, 'dd/MM/yyyy') || undefined
    : undefined;

    this.loading = true;
    this.error = null;

    this.despesaService.gerarRelatorioDespesas(dataInicioFormatada, dataFimFormatada).subscribe({
      next: (blob) => {
        this.downloadFile(blob);
        this.loading = false;
      },
      error: (err) => {
        console.error('Erro ao gerar relatório:', err);
        this.error = 'Erro ao gerar relatório. Tente novamente.';
        this.loading = false;
      }
    });
  }

  private downloadFile(blob: Blob) {
    const a = document.createElement('a');
    const objectUrl = URL.createObjectURL(blob);

    a.href = objectUrl;
    a.download = 'relatorio.xlsx';
    a.click();

    setTimeout(() => {
      URL.revokeObjectURL(objectUrl);
      a.remove();
    }, 100);
  }
}
