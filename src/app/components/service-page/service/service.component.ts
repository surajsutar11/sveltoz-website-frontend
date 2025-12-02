import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-service',
  standalone: false,
  templateUrl: './service.component.html',
  styleUrl: './service.component.scss'
})
export class ServiceComponent {
currentSection = 0;

  ngOnInit() {
    window.scrollTo({ top: 0 });
  }

  @HostListener('wheel', ['$event'])
  onScroll(event: WheelEvent) {
    event.preventDefault();

    const sections = document.querySelectorAll('.scroll-section');
    const totalSections = sections.length;

    if (event.deltaY > 0 && this.currentSection < totalSections - 1) {
      // scroll down
      this.currentSection++;
    } else if (event.deltaY < 0 && this.currentSection > 0) {
      // scroll up
      this.currentSection--;
    }

    const target = sections[this.currentSection] as HTMLElement;
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
