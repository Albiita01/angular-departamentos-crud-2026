import { ChangeDetectorRef, Component } from '@angular/core';
import { ServiceDepartamentos } from '../../services/service.departamento';
import { Departamento } from '../../models/departamento';

@Component({
  selector: 'app-home-component',
  standalone: false,
  styleUrl: './home-component.css',
  templateUrl: './home-component.html',
})
export class HomeComponent {

  public departamentos!: Array<Departamento>;

  constructor(
    private _service: ServiceDepartamentos,
    private _cdr: ChangeDetectorRef
  ) { }

  async deleteDepartamento(id: number): Promise<void> {
    let response = await this._service.deleteDepartamentoAsync(id);
    await this.loadDepartamentos();
  }

  // Creamos un método a parte porque al ngOnInit no lo podemos llamar para recargar los datos
  async loadDepartamentos(): Promise<void> {
    this.departamentos = await this._service.getDepartamentosAsync();
    this._cdr.detectChanges();
  }

  async ngOnInit(): Promise<void> {
    await this.loadDepartamentos();
  }
}
