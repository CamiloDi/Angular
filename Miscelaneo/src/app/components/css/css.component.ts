import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-css',
  template: `
    <p>
      css works!
    </p>
  `,
  styles: [`
            p{font-size:80px;}`]
})
export class CssComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
