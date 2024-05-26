import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common'

@Component({
  selector: 'child-route-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'child-route';

  router = inject(Router);
  location = inject(Location);

  navigate() {
    this.router.navigate(['/page1']);
  }

  navigateToPage2() {
    // navigate to page2 with parameter
    let id = 1234
    //this.router.navigate(['/page2', 4567]);
    this.router.navigate(['/page2', id])
  }

  navigateToPage2WithQueryParams() {
    let id = 45678
    this.router.navigate(['/page2', id], { queryParams: { name: 'Jhon Doe' } });
  }

  navigateByUrl() {
    // this.router.navigateByUrl('/page2/:14558888')
    let somecondition = false;
    if (somecondition) {
      this.router.navigateByUrl('/page1');
    } else {
      this.router.navigateByUrl('/page2/99999');
    }

  }

  goBack() {
    this.location.back();
  }

  goForward() {
    this.location.forward();
  }
}
