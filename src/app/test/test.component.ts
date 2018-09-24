import { Component, OnInit } from '@angular/core';
import { FetchService } from '../fetch.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public superheroes = [];
  constructor(private fecth: FetchService) { }

  ngOnInit() {
    this.fecth.getData()
        .subscribe(data => this.superheroes = data);
  }

  hailBoy() {
    return this.superheroes;
  }

}
