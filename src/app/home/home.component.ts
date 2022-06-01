import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';

import gsap from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';

let introTl = gsap.timeline();
let brandTl = gsap.timeline();
gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild('introHeroImg', { static: true}) IntroImg!: ElementRef<HTMLDivElement>;
  @ViewChild('introTitle', { static: true}) IntroTitle!: ElementRef<HTMLDivElement>;
  @ViewChild('introSub', { static: true}) IntroSub!: ElementRef<HTMLDivElement>;
  @ViewChild('introCta', { static: true}) IntroCta!: ElementRef<HTMLDivElement>;
  @ViewChild('brandTitle', { static: true}) brandTitle!: ElementRef<HTMLDivElement>;
  @ViewChild('brandTiTleSub', { static: true}) brandTiTleSub!: ElementRef<HTMLDivElement>;
  @ViewChild('brandImgs', { static: true}) brandImgs!: ElementRef<HTMLDivElement>;

  constructor() { }

  ngOnInit(): void {
    this.onLoadAnimation();
    this.homeScrollAnimation();
  }

  onLoadAnimation() {
    introTl
     .to(this.IntroImg.nativeElement, {
      ease: "powe3.inOut",
      duration: 1.6, 
      "clip-path": "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
     }, "intro")
     .from(this.IntroImg.nativeElement, {
      ease: "powe4.inOut",
      scale: 1.2,
      duration: 1.6,
     }, "intro")
     .from(this.IntroTitle.nativeElement, {
       opacity: 0,
       y: '15%',
       duration: 1.5
     }, '-=1')
     .from(this.IntroSub.nativeElement, {
       opacity: 0,
       y: '20%',
       duration: 1
      }, '-=0.5')
     .from(this.IntroCta.nativeElement.childNodes, {
       opacity: 0,
       y: '30%',
       stagger: 0.2
      }, '-=1.5')
  }

  homeScrollAnimation() {
    gsap.from(this.brandTitle.nativeElement, {
      scrollTrigger: {
        trigger: this.brandTitle.nativeElement,
        start: 'top 60%',
      },
      y: '20%',
      opacity: 0,
    })
    gsap.from(this.brandTiTleSub.nativeElement, {
      scrollTrigger: {
        trigger: this.brandTitle.nativeElement,
        start: 'top 60%',
      },
      duration: 1.5,
      y: '20%',
      opacity: 0,
    })
    gsap.from(this.brandImgs.nativeElement.childNodes, {
      y: '25%',
      opacity: 0,
      stagger: 0.2,
      delay: 0.2,
      ease: "powe4.inOut",
      scrollTrigger: {
        trigger: this.brandTitle.nativeElement,
        start: 'top 60%',
      },
    })
  }

}
