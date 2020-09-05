import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})

export class DashboardComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  logout(){
    localStorage.clear();
    this._router.navigate(['/login']);
  }

}
