import { Component, OnInit } from '@angular/core';
import { communicationSettings } from './communication.setting';

@Component({
  selector: 'app-communications',
  templateUrl: './communications.component.html',
  styleUrls: ['./communications.component.scss']
})
export class CommunicationsComponent implements OnInit {

  communication = communicationSettings;

  selectedCommunication;

  constructor() {

  }

  ngOnInit() { }

}
