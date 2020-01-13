import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-agency-card',
  templateUrl: './agency-card.component.html',
  styleUrls: ['./agency-card.component.scss']
})
export class AgencyCardComponent implements OnInit {
  @Input()
  agency;

  @Input()
  loading;

  @Input()
  edit = true;
  
  constructor() { }

  ngOnInit() {

  }

}
