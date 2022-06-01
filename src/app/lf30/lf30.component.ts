import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-lf30',
  templateUrl: './lf30.component.html',
  styleUrls: ['./lf30.component.scss']
})
export class Lf30Component implements OnInit {

  // Hero Section
  @ViewChild('lfHeroImg', { static: true }) LfHeroImg!: ElementRef<HTMLDivElement>; 
  @ViewChild('lfHeroTitle', { static: true }) LfHeroTitle!: ElementRef<HTMLDivElement>; 
  // First Section
  @ViewChild('lfSectionOneTitle', { static: true }) LfSectionOneTitle!: ElementRef<HTMLDivElement>; 
  @ViewChild('lfSectionOneDesc', { static: true }) LfSectionOneDesc!: ElementRef<HTMLDivElement>; 
  @ViewChild('lfSectionOneImg', { static: true }) LfSectionOneImg!: ElementRef<HTMLDivElement>; 
  // Second Section
  @ViewChild('lfSectionTwoImg', { static: true }) LfSectionTwoImg!: ElementRef<HTMLDivElement>; 
  @ViewChild('lfSectionTwoOverlay', { static: true }) LfSectionTwoOverlay!: ElementRef<HTMLDivElement>; 
  @ViewChild('lfSectionTwoTitle', { static: true }) LfSectionTwoTitle!: ElementRef<HTMLDivElement>; 
  // Lexus interior
  @ViewChild('lexusInteriorOneImg', { static: true }) LexusInteriorOneImg!: ElementRef<HTMLDivElement>;
  @ViewChild('lexusIntreiorOneContent', { static: true }) LexusInteriorOneContent!: ElementRef<HTMLDivElement>;
  // Lexus Interior second Section
  @ViewChild('lexusInteriorTwoContent', {static: true}) LexusInteriorTwoContent!: ElementRef<HTMLDivElement>;
  @ViewChild('lexusInteriorTwoImg', {static: true}) LexusInteriorTwoImg!: ElementRef<HTMLDivElement>;

  constructor() { }

  ngOnInit(): void {
    this.lfInitialAnimation();
    this.LfScrollAnimation();
  }

  lfInitialAnimation(){
    gsap.to(this.LfHeroImg.nativeElement, {
      ease: "powe3.inOut",
      duration: 2, 
      "clip-path": "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    });
    gsap.from(this.LfHeroImg.nativeElement, {
      ease: "powe3.inOut",
      duration: 2, 
      scale: 1.2
    })
    gsap.from(this.LfHeroTitle.nativeElement, {
      ease: "powe3.inOut",
      duration: 1.5, 
      opacity: 0, 
      y: '15%'
    })
  }
  // First Section Scroll Animation
  LfScrollAnimation(){
    gsap.from(this.LfSectionOneTitle.nativeElement, {
      ease: "powe4.out",
      opacity: 0,
      y: '15%',
      duration: 1,
      scrollTrigger:{
        trigger: this.LfSectionOneTitle.nativeElement,
        start: 'center center',
      }
    })
    gsap.from(this.LfSectionOneDesc.nativeElement, {
      ease: "powe4.out",
      opacity: 0,
      y: '15%',
      duration: 1,
      delay: 0.25,
      scrollTrigger:{
        trigger: this.LfSectionOneTitle.nativeElement,
        start: 'center center',
      }
    })
    gsap.to(this.LfSectionOneImg.nativeElement, {
      ease: "powe3.inOut",
      duration: 1, 
      "clip-path": "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      delay: 0.25,
      scrollTrigger:{
        trigger: this.LfSectionOneTitle.nativeElement,
        start: 'center center',
      }
    })
    gsap.from(this.LfSectionOneImg.nativeElement, {
      scale: 1.2,
      duration: 1, 
      delay: 0.25,
      scrollTrigger:{
        trigger: this.LfSectionOneTitle.nativeElement,
        start: 'center center',
      }
    })
    // Second Section Scroll Animation
    gsap.to(this.LfSectionTwoImg.nativeElement, {
      ease: "powe4.inOut",
      duration: 1, 
      "clip-path": "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      scrollTrigger:{
        trigger: this.LfSectionTwoImg.nativeElement,
        start: 'top center',
      }
    })
    gsap.from(this.LfSectionTwoImg.nativeElement, {
      ease: "powe4.inOut",
      duration: 1, 
      scale: 1.2,
      scrollTrigger:{
        trigger: this.LfSectionTwoImg.nativeElement,
        start: 'top center',
      }
    })
    gsap.to(this.LfSectionTwoOverlay.nativeElement, {
      ease: "powe4.inOut",
      duration: 1, 
      "clip-path": "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      scrollTrigger:{
        trigger: this.LfSectionTwoImg.nativeElement,
        start: 'top center',
      }
    })
    gsap.from(this.LfSectionTwoTitle.nativeElement, {
      ease: "powe4.inOut",
      duration: 1.2, 
      opacity: 0,
      y: '20%',
      scrollTrigger:{
        trigger: this.LfSectionTwoImg.nativeElement,
        start: 'top center',
      }
    })
    // Lexus intreior Section 
    gsap.from(this.LexusInteriorOneImg.nativeElement, {
      ease: "powe4.inOut",
      y: "20%",
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: this.LexusInteriorOneImg.nativeElement,
        start: 'top center',
      }
    })
    gsap.from(this.LexusInteriorOneContent.nativeElement, {
      ease: "powe4.inOut",
      y: "20%",
      opacity: 0,
      duration: 1,
      delay: 0.2,
      scrollTrigger: {
        trigger: this.LexusInteriorOneImg.nativeElement,
        start: 'top center',
      }
    })
    // Lexus interior second section
    gsap.from(this.LexusInteriorTwoContent.nativeElement, {
      ease: "powe4.inOut",
      y: "20%",
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: this.LexusInteriorTwoContent.nativeElement,
        start: 'top-=100 center',
      }
    })
    gsap.from(this.LexusInteriorTwoImg.nativeElement, {
      ease: "powe4.inOut",
      y: "20%",
      opacity: 0,
      duration: 1,
      delay: 0.2,
      scrollTrigger: {
        trigger: this.LexusInteriorTwoContent.nativeElement,
        start: 'top-=100 center',
      }
    })
  }

}
