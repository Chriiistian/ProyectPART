import { Component, OnInit } from '@angular/core';
import {CargarPythonService} from "../cargar-python.service" ;

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  constructor( private _CargarPython:CargarPythonService)
  {
    _CargarPython.Carga(["mapa"]);
   }

  ngOnInit(): void {
  }

}
