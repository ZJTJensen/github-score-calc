import { Component, OnInit, Input } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {
  @Input() data;
  


  constructor() {}

  ngOnInit() {
  }
}
