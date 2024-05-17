import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  
  status: boolean = true;
  // navLink = document.querySelectorAll(".nav-link");

  // this.navLink.forEach(n => n.addEventListener("click", closeMenu));

  clickEvent(){
      this.status = !this.status;       
  }

  closeEvent(){
    this.status = !this.status
  }

}
