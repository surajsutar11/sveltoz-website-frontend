import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { NavItem } from '../header/nav-item.interface';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrl: './main-nav.component.scss',
  standalone: false,
})
export class MainNavComponent {
 @Input() items: NavItem[] = [];
  @Output() navClick = new EventEmitter<string>(); // fragment scroll
  // isMobile$ = inject(BreakpointObserver)
  //                .observe('(max-width: 991px)')
  //                .pipe(map(r => r.matches));
}
