import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CargarPythonService {

  constructor() { }

  Carga(archivos:string[])
  {
    for(let archivo of archivos)
    {
      let script = document.createElement("script");
      script.src= "../assets/py/"+archivo+".py";
      let body = document.getElementsByTagName("body")[0];
      body.appendChild(script);
    }
  }
}
