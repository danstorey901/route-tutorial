import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-habout',
  templateUrl: './habout.component.html',
  styleUrls: ['./habout.component.css']
})
export class HaboutComponent implements OnInit {

  aName: string = "";

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.aName = this.route.snapshot.params["name"];
  }

}
