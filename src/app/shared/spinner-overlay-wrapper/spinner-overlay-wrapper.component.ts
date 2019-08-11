import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-spinner-overlay-wrapper',
  templateUrl: './spinner-overlay-wrapper.component.html',
  styleUrls: ['./spinner-overlay-wrapper.component.scss']
})
export class SpinnerOverlayWrapperComponent implements OnInit {

  @Input() public readonly showSpinner = false;
  @Input() public readonly message: string = 'Loading...';
  
  constructor() { }

  ngOnInit() {
  }

}
