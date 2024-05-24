import { Component,HostListener } from '@angular/core';
import { DashboardComponent } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [DashboardComponent],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isClassAdded: boolean = false;

  toggleClass(): void {
    this.isClassAdded = !this.isClassAdded;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.checkScreenSize();
  }

  private checkScreenSize(): void {
    if (window.innerWidth < 1200) {
      this.isClassAdded = false;
    }
    if (window.innerWidth > 1200) {
      this.isClassAdded = true;
    }
  }
}
