import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CarModel } from '../shared/car.model';
import { CarsService } from '../shared/cars.service';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.scss']
})
export class CarDetailComponent implements OnInit {

  car!: CarModel;
  carHeroImgURL: [] = [];

  @ViewChild('carDetailHero', {static: true}) CarDetailHero!: ElementRef<HTMLDivElement>; 
  @ViewChild('carDetailName', {static: true}) CarDetailName!: ElementRef<HTMLDivElement>; 
  @ViewChild('carDescImg', {static: true}) CarDescImg!: ElementRef<HTMLDivElement>; 
  @ViewChild('carDetailGallery', {static: true}) CarDetailGallery!: ElementRef<HTMLDivElement>; 
  @ViewChild('carDetailGallery1', {static: true}) CarDetailGallery1!: ElementRef<HTMLDivElement>; 

  constructor(private carsService: CarsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
      this.car = this.carsService.getCars()[params['id']];
    } 
    );

    this.carDetailInitialAnimation();
    this.carDetailScrollAnimation();
  }

  carDetailInitialAnimation(){
    gsap.to(this.CarDetailHero.nativeElement, {
      ease: "powe3.inOut",
      duration: 1.6, 
      "clip-path": "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    });
    gsap.from(this.CarDetailHero.nativeElement, {
      ease: "powe4.inOut",
      duration: 1.6, 
      scale: 1.2
    })
    gsap.from(this.CarDetailName.nativeElement, {
      ease: "powe4.inOut",
      y: "30%",
      opacity: 0,
      duration: 1.6
    })
  }
  
  carDetailScrollAnimation() {
    gsap.to(this.CarDescImg.nativeElement, {
      ease: "powe3.inOut",
      duration: 1.6, 
      "clip-path": "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      scrollTrigger: {
        trigger: this.CarDescImg.nativeElement,
        start: 'top-=100 center',
        end: 'top+=100 center',
      }
    })
    gsap.from(this.CarDescImg.nativeElement, {
      scale: 1.4,
      scrollTrigger: {
        trigger: this.CarDescImg.nativeElement,
        start: 'top-=100 center',
      }
    })
    gsap.from(this.CarDescImg.nativeElement, {
      y: "15%",
      scrollTrigger: {
        trigger: this.CarDescImg.nativeElement,
        start: 'top-=100 center',
        scrub: true,
      }
    })
    gsap.to(this.CarDetailGallery.nativeElement, {
      y: "-20%",
      scrollTrigger: {
        trigger: this.CarDetailGallery.nativeElement,
        start: 'top-=100 center',
        end: 'bottom center',
        scrub: true,
      }
    })
    gsap.to(this.CarDetailGallery1.nativeElement, {
      y: "-20%",
      scrollTrigger: {
        trigger: this.CarDetailGallery1.nativeElement,
        start: 'top-=100 center',
        scrub: true,
      }
    })
  }

}
