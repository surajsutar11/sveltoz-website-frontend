import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: false
})

export class HeaderComponent implements OnInit {
  isAdminLoggedIn: boolean = false;
  responsiveMenuVisible: Boolean = false;
  pageYPosition: number;
  cvName: string = "";
  megaOpen = false;
  activeMegaMenu: string | null = null;
  activeSubmenu: string | null = null;
  private closeMegaMenuTimeout: any = null;
  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    if (localStorage.getItem('hasLoggedIn')) {
      this.isAdminLoggedIn = true;
      this.router.navigate(['/admin']);
    } else {
      this.isAdminLoggedIn = false;
    }

    // this.languageFormControl.valueChanges.subscribe(val => this.languageService.changeLanguage(val))

    // this.languageFormControl.setValue(this.languageService.language)

  }

  scroll(el) {
    if (document.getElementById(el)) {
      document.getElementById(el).scrollIntoView({ behavior: 'smooth' });
    } else {
      this.router.navigate(['/home']).then(() => document.getElementById(el).scrollIntoView({ behavior: 'smooth' }));
    }
    this.responsiveMenuVisible = false;
  }
  //   scrollToSection(sectionId: string) {
  //   const element = document.getElementById(sectionId);
  //   if (element) {
  //     element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  //   }
  // }

  scrollToSection(sectionId: string) {
    if (this.router.url !== '/') {
      this.router.navigate(['/'], { fragment: sectionId });
      this.responsiveMenuVisible = false;
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 300);

    } else {
      this.responsiveMenuVisible = false;
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }


  goToServicePage() {
    this.router.navigate(['/service']);
    this.responsiveMenuVisible = false;
  }

  goToAdminPanel() {
    if (!this.isAdminLoggedIn) {
      this.isAdminLoggedIn = localStorage.getItem('hasLoggedIn') === 'true' ? true : false;
       if(!this.isAdminLoggedIn){
        this.router.navigate(['/admin-panel']);
       }
      this.responsiveMenuVisible = false;
    } else {
      // Admin Logout logic
      localStorage.removeItem('hasLoggedIn');
      localStorage.removeItem('token');
      // window.location.reload();
      this.isAdminLoggedIn = false;
      this.router.navigate(['/admin-panel'])
      this.responsiveMenuVisible = false;
    }
  }

  goToAdminDashboard() {
    this.router.navigate(['/admin']);
    this.responsiveMenuVisible = false;
  }

  @HostListener('window:scroll', ['getScrollPosition($event)'])
  getScrollPosition(event) {
    this.pageYPosition = window.pageYOffset
  }

  openMegaMenu(menu: string) {
    if (this.closeMegaMenuTimeout) {
      clearTimeout(this.closeMegaMenuTimeout);
      this.closeMegaMenuTimeout = null;
    }
    this.activeMegaMenu = menu;
  }

  startCloseMegaMenu(delay = 180) {
    if (this.closeMegaMenuTimeout) {
      clearTimeout(this.closeMegaMenuTimeout);
    }
    this.closeMegaMenuTimeout = setTimeout(() => {
      this.activeMegaMenu = null;
      this.activeSubmenu = null;
      this.closeMegaMenuTimeout = null;
    }, delay);
  }

  // cancel the scheduled close (used when re-entering panel)
  cancelCloseMegaMenu() {
    if (this.closeMegaMenuTimeout) {
      clearTimeout(this.closeMegaMenuTimeout);
      this.closeMegaMenuTimeout = null;
    }
  }

  // set submenu for right panel when hovering items
  setActiveSubmenu(sub: string) {
    this.activeSubmenu = sub;
  }
  toggleMenu() {
    this.responsiveMenuVisible = !this.responsiveMenuVisible;
  }

  handleMenuClick(section: string, eventName: string) {
    this.scrollToSection(section);
    this.responsiveMenuVisible = false; // close menu instantly
  }
}

