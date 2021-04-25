import { HousingService } from '../../services/housing.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Iproperty } from '../../property.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  properties:Array<Iproperty> | undefined ;
saleRent = 1;


  constructor(private housingService:HousingService, private route:ActivatedRoute) { }

  ngOnInit(): void {
   if(this.route.snapshot.url.toString()){
    this.saleRent = 0;
   }
   this.housingService.getAllProperties(this.saleRent).subscribe(
      data => {
        console.log(data)
        this.properties = data;
      }
    )
  }

}
