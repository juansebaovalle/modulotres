import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
    
    currentUser = '';

  constructor(
  ) {}

  ngOnInit() {     
    let name = `user-${new Date().getTime()}`;
    this.currentUser = name;    
  }
 
  
}
