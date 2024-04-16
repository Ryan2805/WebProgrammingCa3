import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { CarComponent } from './car.component';
import { CarApiService } from '../../services/car-api.service';
import { ICar, NewCar } from '../../interfaces/car';

describe('CarComponent', () => {
  let component: CarComponent;
  let fixture: ComponentFixture<CarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule], 
      declarations: [CarComponent], 
      providers: [CarApiService] 
    }).compileComponents(); 
    
    fixture = TestBed.createComponent(CarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});