import { HttpClient } from "@angular/common/http";
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
}