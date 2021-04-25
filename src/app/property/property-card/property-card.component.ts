import { Component, Input, OnInit } from '@angular/core';
import { Iproperty } from '../../property.interface';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css']
})
export class PropertyCardComponent implements OnInit {
  @Input()
  property!: Iproperty;
// property:any = {
//   "id":1,
//   "name":"Birla House",
//   "type":"House",
//   "price":12000
// }

  constructor() { }

  ngOnInit(): void {
  }

}
