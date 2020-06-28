import { Component, OnInit } from '@angular/core';
import { PrimaService } from './prima.service';

@Component({
  selector: 'pm-prima',
  template: `
    <p>
      prima works Lib da Gaetano Sabino!
    </p>
  `,
  styles: [
  ]
})
export class PrimaComponent implements OnInit {

  constructor(private p: PrimaService) { }

  ngOnInit(): void {
  }

}
