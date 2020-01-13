import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../../core/data.service';
import { ActivatedRoute } from '@angular/router';
import { SnackBarService } from '../../core/snack-bar.service';

@Component({
  selector: 'app-agency-form',
  templateUrl: './agency-form.component.html',
  styleUrls: ['./agency-form.component.scss']
})
export class AgencyFormComponent implements OnInit {
  agencyForm: FormGroup;
  public agency$;
  public isEdit;

  @Input()
  agency;

  @Output()
  saveAgency = new EventEmitter();

  @Output()
  sendError = new EventEmitter();

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
  
    this.createForm();

    if (this.agency) {
      this.agencyForm.patchValue(this.agency);
    }
  }

  createForm() {
    this.agencyForm = this.fb.group({
      name: ["", Validators.required],
      address: ["", Validators.required]
    });
  }

  addAgency() {
    if (this.agencyForm.valid) {
      this.saveAgency.emit(this.agencyForm.value);
    } else {
      this.sendError.emit("Por favor llena todos los campos requeridos");
    }
  }

}
