import { formatDate } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-prestar',
  templateUrl: './prestar.component.html',
  styleUrls: ['./prestar.component.css']
})
export class PrestarComponent {


  today = new Date();
  format = 'yyyy/MM/dd';
//myDate = '2019-06-29';
locale = 'en-US';
formattedDate = formatDate(this.today, this.format, this.locale);
}
