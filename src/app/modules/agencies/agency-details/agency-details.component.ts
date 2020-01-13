import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { DataService } from '../../core/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SnackBarService } from '../../core/snack-bar.service';

@Component({
  selector: 'app-agency-details',
  templateUrl: './agency-details.component.html',
  styleUrls: ['./agency-details.component.scss']
})
export class AgencyDetailsComponent implements OnInit {

  public errorMessages$ = new Subject();
  public isDbLoading$;
  public agency$;
  public isEdit;
  private title;

  private id;

  @Output()
  showDetails = new EventEmitter();

  constructor(
    private data: DataService,
    private route: ActivatedRoute,
    private snackBar: SnackBarService
  ) {
    this.title = "Detalle de la agencia";
  }

  ngOnInit() {
    this.showDetails.emit(this.title);
    const id = this.route.snapshot.paramMap.get("id");
    this.id = id;
    this.agency$ = this.data.getAgency(id);
    this.isDbLoading$ = this.data.isLoading$;
  }

  edit() {
    this.isEdit = !this.isEdit;
  }

  saveAgency(values) {
    this.data
      .editAgency(this.id, values)
      .then(() => {
        this.snackBar.open("Agencia guardada satisfactoriamente");
        this.edit();
      })
      .catch(e => {
        this.snackBar.open("No se pudo editar la agencia");
        this.edit();
      });
  }

  sendError(message) {
    this.errorMessages$.next(message);
  }
}
