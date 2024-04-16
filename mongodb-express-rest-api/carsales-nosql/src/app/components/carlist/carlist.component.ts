import { Component, OnInit } from '@angular/core';
import { CarApiService } from '../../services/car-api.service';
import { ICar, NewCar } from '../../interfaces/car';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  carsData: ICar[] | any;

  constructor(private _carAPIService: CarApiService) { }

  ngOnInit() {
    this.getCars();
  }

  getCars() {
    this._carAPIService.getAllCars().subscribe(carsData => {
      this.carsData = carsData;
    });
  }

  addCar(make: string, model: string, year: string, imageUrl: string): boolean {
    let newCar: ICar = new NewCar(make, model, year, imageUrl);
    this._carAPIService.addCarDetails(newCar).subscribe(response => {
      
      console.log('Car added successfully:', response);
      // refreshing lsit
      this.getCars();
    });
    return false;
  }
}