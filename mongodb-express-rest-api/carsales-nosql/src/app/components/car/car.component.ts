import { Component, Input } from '@angular/core'; 
import { CarApiService } from '../../services/car-api.service'; 
import { ICar } from '../../interfaces/car'; 

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent {
  @Input() car!: ICar; 
  carImageWidth: number = 300; 

  constructor(private _carAPIService: CarApiService) { } 


  deleteCar(carId:string) { 
    this._carAPIService.delCarDetails(carId).subscribe(result =>
      { 
        console.log(result);
      });
  }
}
