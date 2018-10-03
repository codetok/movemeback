import { Component, OnInit } from '@angular/core';
import { communicationSettings } from './communication.setting';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-communications',
  templateUrl: './communications.component.html',
  styleUrls: ['./communications.component.scss'],
  animations: [
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({transform: 'translateX(100%)', opacity: 0}),
          animate('200ms', style({transform: 'translateY(0)', opacity: 1}))
        ]),
        transition(':leave', [
          style({transform: 'translateX(0)', opacity: 1}),
          animate('100ms', style({transform: 'translateY(100%)', opacity: 0}))
        ])
      ]
    )
  ],
})
export class CommunicationsComponent implements OnInit {

  communication = communicationSettings;

  selectedCommunication;

  constructor() {

  }

  ngOnInit() { }

}
