import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Departamento } from "../models/departamento";
import { firstValueFrom } from "rxjs";
import { environment } from "../../environments/environment.development";

@Injectable()
export class ServiceDepartamentos {

    url = environment.apiDepartamentos;
    constructor(private _http: HttpClient) { }

    async getDepartamentosAsync(): Promise<Departamento[]> {
        let request = "api/departamentos";
        return firstValueFrom(this._http.get<Departamento[]>(this.url + request));
    }

    async createDepartamento(departamento: Departamento): Promise<any> {
        // Convertimos el objeto recibido a JSON
        let json = JSON.stringify(departamento);
        // Creamos un objeto header para el type
        let header = new HttpHeaders();
        // Incluimos la key de content-type
        header = header.set("content-type", "applications/json");
        let request = "api/departamentos";
        return firstValueFrom(
            this._http.post(this.url + request, json, { headers: header })
        )
    }
}