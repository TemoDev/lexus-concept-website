import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CarModel } from '../shared/car.model';
import { CarsService } from '../shared/cars.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.scss']
})
export class CarDetailComponent implements OnInit {

  car!: CarModel;
  carHeroImgURL: [] = [];

  constructor(private carsService: CarsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
      this.car = this.carsService.getCars()[params['id']];
    } 
    )
  }

}
