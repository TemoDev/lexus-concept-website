import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @ViewChild('nav', { static: true }) nav!: ElementRef<HTMLDivElement>;
  @ViewChild('navItems', { static: true })
  navItems!: ElementRef<HTMLDivElement>;
  @ViewChild('burger', { static: true }) burger!: ElementRef<HTMLDivElement>;
  constructor() {}

  ngOnInit(): void {}

  toggleNav() {
    this.nav.nativeElement.classList.toggle('nav__active');
    this.navItems.nativeElement.classList.toggle('nav-items__visible');
    this.burger.nativeElement.classList.toggle('burger__active');
    // console.log(this.nav);
  }
}
