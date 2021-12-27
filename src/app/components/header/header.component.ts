import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  sis() {
    let menu = document.querySelector('.menu');
    if(menu) {
      menu.classList.toggle('bot');
    } 
  }
}
