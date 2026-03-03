import { Component, OnInit, AfterViewInit, ElementRef, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

// Configuración centralizada de animaciones
interface AnimationConfig {
  delay: number;
  duration?: number;
  element: string;
  action: () => void;
}

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  standalone: false
})
export class BannerComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    // Suscribirse a cuando las animaciones deben comenzar
    // this.loadingSubscription = this.loadingService.animationsStarted$.subscribe((shouldStart) => {
    //   if (shouldStart && !this.animationsStarted) {
    //     this.animationsStarted = true;
    //     this.initAnimations();
    //     this.showVideo();
    //   }
    // });
  }

  bannerOptions = {
    loop: true,
    autoplay: true,
    autoplayTimeout: 6000,
    autoplayHoverPause: true,
    dots: true,
    nav: true,
    items: 1,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    navText: [
      '<span class="carousel-control-prev-icon"></span>',
      '<span class="carousel-control-next-icon"></span>'
    ]
  };

  customOptions = { loop: true, autoplay: true, autoplayTimeout: 5000, autoplayHoverPause: true, dots: true, nav: false, responsive: { 0: { items: 1 }, 768: { items: 1 }, 1024: { items: 1 } } };

   goToSuccessStories() {
    this.router.navigate(['/success-stories']);
  }

}
