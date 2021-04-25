import { Iproperty } from './../property.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HousingService {
  constructor(private http:HttpClient) { }

getAllProperties(saleRent:number): Observable<Iproperty[]>{
  return this.http.get('data/properties.json').pipe(
  map((data:any) => {
      const propertiesArray: Array<Iproperty> = [];
      for (const id in data){
        if (data.hasOwnProperty(id) && data[id].saleRent === saleRent ){
          propertiesArray.push(data[id]);
        }
      }
      console.log(propertiesArray)
      return propertiesArray;
    }
  )
  )

}



}
