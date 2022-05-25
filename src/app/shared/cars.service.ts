import { Injectable } from '@angular/core';
import { CarModel } from './car.model';

@Injectable({ providedIn: 'root' })
export class CarsService {
  constructor(private carModel: CarModel) {}

  cars: CarModel[] = [
    new CarModel(
      'nio et5',
      `The NIO ET5 was unveiled in China on 18 December 2021 at the 'NIO Day' event in Suzhou's Olympic Sports Centre. It will be launched in September 2022 with a starting price of ¥328.000 (~$51,450 USD) and acts as a direct competitor to Tesla's Model 3 sedan and the Xpeng P7.`,
      51540
    ),
    new CarModel(
      'nio et7',
      `The NIO ET7 is the first of the Chinese EV brand's second-generation models, which represent a big stride forward and will underpin a global rollout. A large sedan clearly aimed at the Tesla Model S and incoming rival EVs from a variety of European brands, the ET7 makes a compelling case for an electric switch.`,
      71000
    ),
    new CarModel(
      'nio ec6',
      `The EC6 is a 5-door, 5-seater crossover SUV with a sporting roofline. It is a "crossover coupe" counterpart to the more boxy ES6. The car is offered with an option for a 100-kWh battery, available for all current NIO models. The EC6 is powered by a lithium-ion battery pack, which is swappable, just like the NIO ES8.`,
      54000
    ),
    new CarModel(
      'nio es6',
      `The NIO ES6 was the world's first SUV with both permanent magnet and induction motors. With a dual-motor four-wheel drive system with a peak power of up to 400 kW (544 hp) and a maximum torque of 725 Nm, the NIO ES6 accelerates from 0 to 100 km/h in 4.7 seconds.`,
      55000
    ),
    new CarModel(
      'nio es8',
      `The NIO ES8 is an all-electric, 6 or 7-seater full-sized Sport Utility Vehicle manufactured by NIO. The ES8 was put into production in June 2018 for the Chinese market and on 30 September 2021 it was launched in Norway.`,
      59463
    ),
    new CarModel(
      'Canoo lifestyle (Base)',
      `The Lifestyle Vehicle has the interior space of a large SUV, with the exterior footprint of a compact car and is made for urban, adventure, families, fleet, ride hailing and more. Anticipated specifications include up to 300hp and 332 lb. -ft. of peak motor torque with 250 miles of battery range.`,
      34000
    ),
  ];

  getCars() {
    return this.cars.slice();
  }
}