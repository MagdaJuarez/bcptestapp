import { Component, OnInit, Output } from '@angular/core';
import { DataService } from '../../core/data.service';
import { Observable } from 'rxjs';

interface Agency{
  id:string;
  agencia:string;
  distrito:string;
  provincia:string;
  departamento:string;
  direccion:string;
  lat:number;
  lon:number;
}

@Component({
  selector: 'app-agencies-list',
  templateUrl: './agencies-list.component.html',
  styleUrls: ['./agencies-list.component.scss']
})

export class AgenciesListComponent implements OnInit {

  agencies$: Observable<Agency[]>;
  isDbLoading$;
  public title;
  constructor(private db: DataService) { 
    this.title = "Detalle de la agencia";
  }

  ngOnInit() {
    this.agencies$ = this.db.getAgencies();
    this.isDbLoading$ = this.db.isLoading$;
  }

}
