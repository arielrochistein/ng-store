import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  @Input() isOpen: boolean = false;

  @Output() onCloseSidebar: EventEmitter<void> = new EventEmitter();

  constructor(private router: Router, public dialog: MatDialog) {
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

  public openLogin(): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      data: {},
    });
  }
}
