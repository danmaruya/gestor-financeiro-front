import { Component } from '@angular/core';
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
  `]
})
export class RelatorioComponent {
  loading = false;
  error: string | null = null;

  constructor(private despesaService: DespesaService) {}

  gerarRelatorio() {
    this.loading = true;
    this.error = null;

    this.despesaService.gerarRelatorioDespesas().subscribe({
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
