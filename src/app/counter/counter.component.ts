import { Component, OnInit } from '@angular/core';
import { CounterService } from './../counter.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  counter ;
  constructor(private counterService: CounterService) {}

  ngOnInit(): void {
    this.counterService
      .getCounter()
      .subscribe((counter) => this.counter = counter);
  }

  increaseCounter(){
    this.counterService.setCounter(this.counter+1)
  }

  decreaseCounter(){
    this.counterService.setCounter(this.counter-1)
  }
}
