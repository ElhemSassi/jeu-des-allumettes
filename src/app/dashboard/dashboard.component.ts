import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  number_matchs: any[] = [5, 10, 15, 21] ;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  /**
   * Redirect to the game page with the number of crachs
   * @param number - number of matchs selected 
   */
  startGame(number) {
    this.router.navigate(['/game', number]);
  }

}
