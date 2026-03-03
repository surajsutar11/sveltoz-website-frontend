import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';

@Component({
    selector: 'app-jobs',
    templateUrl: './jobs.component.html',
    styleUrls: ['./jobs.component.scss'],
    standalone: false
})
export class JobsComponent implements OnInit {
 blocks = [
    {
      number: '01.',
      title: 'Digital Product Engineering',
      body: 'From ideation to launch, our comprehensive suite of product-engineering services helps bring your products to life.',
      link: 'Know More →'
    },
    {
      number: '02.',
      title: 'Technology Solutions',
      body: 'With a rich legacy of transformative-technology solutions, we forge ahead, adapting to the dynamic needs of industries worldwide.',
      link: 'Know More →'
    },
    {
      number: '03.',
      title: 'Artificial Intelligence',
      body: 'Leverage the power of AI to unlock your competitive edge, no matter where you stand in your AI journey.',
      link: 'Know More →'
    }
  ];
  active = 0

  constructor(
  ) { }

  ngOnInit(): void {
  }

  // ngAfterViewInit(): void {
  //   this.initAnimations();
  // }

  // private initAnimations(): void {
  //   const jobsSection = this.elementRef.nativeElement;

  //   // Animar título
  //   const title = jobsSection.querySelector('.about-title');
  //   if (title) {
  //     this.animationsService.observeElement(title, {
  //       type: 'slideInUp',
  //       duration: 1000
  //     });
  //   }

  //   // Animar contenedor de tabs
  //   const tabsContainer = jobsSection.querySelector('.jobs-tabs');
  //   if (tabsContainer) {
  //     this.animationsService.observeElement(tabsContainer as HTMLElement, {
  //       type: 'fadeInUp',
  //       duration: 1200,
  //       delay: 300
  //     });
  //   }

  //   // Animar tabs individuales
  //   const tabs = jobsSection.querySelectorAll('li[ngbNavItem]');
  //   tabs.forEach((tab: HTMLElement, index: number) => {
  //     this.animationsService.observeElement(tab, {
  //       type: 'scaleIn',
  //       delay: 600 + (index * 150)
  //     });

  //     // Añadir efectos hover
  //     this.animationsService.addHoverEffects(tab, ['lift']);
  //   });

  //   // Animar contenido de trabajos (con delay para que aparezcan después de hacer click)
  //   setTimeout(() => {
  //     const jobDescriptions = jobsSection.querySelectorAll('.job-description');
  //     jobDescriptions.forEach((desc: HTMLElement, index: number) => {
  //       this.animationsService.observeElement(desc, {
  //         type: 'fadeInLeft',
  //         delay: index * 200
  //       });
  //     });
  //   }, 1000);
  // }
}
