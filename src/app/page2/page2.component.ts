import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'child-route-page2',
  templateUrl: './page2.component.html',
  styleUrl: './page2.component.scss'
})
export class Page2Component {

  route = inject(ActivatedRoute);
  userId = '';
  queryParams = {};

  constructor() {

    // get parameter from url
    this.route.params.subscribe((params) => {
      this.userId = params['userId'];
    });


    // get string parameter from url 
    this.route.queryParams.subscribe((queryParams) => {
      this.queryParams = queryParams;
      console.log(queryParams);
    });
  }


}
