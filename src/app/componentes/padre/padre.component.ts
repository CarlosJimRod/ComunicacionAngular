import {Component, ViewChild} from '@angular/core';
import {HijoComponent} from "../hijo/hijo.component";

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent {
  message!: string;

  @ViewChild(HijoComponent) hijo: any;

  ngAfterViewInit() {
    this.message = this.hijo.message;
  }
}
