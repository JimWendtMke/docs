import { Component, OnInit } from '@angular/core';

import { GlobalMessageService } from 'src/app/services/global-message.service';
import { GlobalMessageType } from 'src/app/interfaces/global-message-type';

import { GuxButtonType } from 'src/app/gux/interfaces/gux-button.interface';
import { DropdownItems, Examples } from './button.data';

@Component({
  selector: 'button-demo',
  templateUrl: './button.html',
  styleUrls: ['../../docs/assets/styles/base-styles.scss']
})
export class GuxButtonDemoComponent implements OnInit {

  dropdownItems = DropdownItems;
  examples = Examples;

  example: GuxButtonType[];
    
  constructor(
    private globalMessageService: GlobalMessageService
  ) { }

  ngOnInit() {
    this.example = this.examples[0];
  }

  public btnClicked = ($event, btnLabel, btnIcon) => {
    let detail: string = 'Unknown value';
    if (btnLabel) {
      detail = 'Clicked on button with label: ' + btnLabel;
    } else if (btnIcon) {
      detail = 'Clicked on button with icon: ' + btnIcon;
    }
    const messagePacket: GlobalMessageType = {
      severity: 'success',
      summary: 'Global Message Bus Delivery',
      detail: detail,
      key: 'gux-toast',
      life: 2000,
      sticky: false,
      closable: false
    }
    this.globalMessageService.sendMessage(messagePacket);
  }

}
