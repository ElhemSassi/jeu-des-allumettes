import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  number: any;
  choices = [1, 2, 3];
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.number = this.route.snapshot.paramMap.get('number');
  }
  
  /**
   * Decrement the number of crachs 
   * @param x: integer  - number of matches to eliminate
   * @return number: integer  - the new number after decrement  
   */
  userPlay(x) {
    if (this.number === 1 && x === 1 || this.number === 2 && x === 2 || this.number === 3 && x === 3) {
      alert('Vous avez gagner, réessayer !!!');
      this.router.navigate(['/dashboard']);
    } else if (this.number < x) {
      alert('Vous avez perdu, réessayer !!!');
      this.router.navigate(['/dashboard']);
    } else {
      this.number = this.number - x;
      this.computerPlay();
    }
  }

  /**
   * Decrement the number of crachs 
   * @return number: integer  - the new number after decrement  
   */
  computerPlay(){
    // get random number 
    var randomNumber =0;   
    do {
      var indexRandom = Math.floor(Math.random()* this.choices.length);
      randomNumber = this.choices[indexRandom];
    } while(randomNumber > this.number);

    if (randomNumber != this.number) {
      alert("l'ordinateur a choisi " + randomNumber);
    } else {
      alert("l'ordinateur a choisi " + randomNumber + " Il a gagné!!! , réessayer !!!");
      this.router.navigate(['/dashboard']);
    }
    this.number = this.number - randomNumber;
  }
}
