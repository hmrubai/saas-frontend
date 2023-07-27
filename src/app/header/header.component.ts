import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  

  // constructor() { }

  // ngOnInit(): void {

    
  // }
  isDropdownOpen = false;
  isDropdown2Open = false;
  isDropdown3Open = false;

  showDropdown(): void {
    this.isDropdownOpen = true;
  }

  hideDropdown(): void {
    this.isDropdownOpen = false;
  }

  showDropdown2(): void {
    this.isDropdown2Open = true;
  }

  hideDropdown2(): void {
    this.isDropdown2Open = false;
  }

  showDropdown3(): void {
    this.isDropdown3Open = true;
  }

  hideDropdown3(): void {
    this.isDropdown3Open = false;
  }
}
