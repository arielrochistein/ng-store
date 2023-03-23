import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  @Input() isOpen: boolean = false;

  @Output() onCloseSidebar: EventEmitter<void> = new EventEmitter();

  constructor(private router: Router) {
    router.events
      .pipe(filter((e) => e instanceof NavigationStart))
      .subscribe((e) => {
        this.closeSidebar();
      });
  }

  public closeSidebar(): void {
    this.onCloseSidebar.emit();
  }

  public navigateToHome(): void {
    this.router.navigate(['/']);
  }
}
