import { Component, OnInit } from '@angular/core';
import { CarModel } from '../shared/car.model';
import { CarsService } from '../shared/cars.service';

@Component({
  selector: 'app-car-inventory',
  templateUrl: './car-inventory.component.html',
  styleUrls: ['./car-inventory.component.scss'],
})
export class CarInventoryComponent implements OnInit {
  carInventory: CarModel[] = [];

  constructor(private carsService: CarsService) {}

  ngOnInit(): void {
    this.carInventory = this.carsService.getCars();
  }
}
