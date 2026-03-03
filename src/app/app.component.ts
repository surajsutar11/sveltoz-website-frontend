import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title,  } from '@angular/platform-browser';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: false
})
export class AppComponent implements OnInit{
  title = 'sveltoz-solution';
  appContentVisible = false;

  constructor(
    private titleService: Title,
    ){
    }
  ngOnInit(): void{
    this.titleService.setTitle( "Sveltoz" );

    // this.metaService.addTags([
    //   {name: 'keywords', content: 'Frontend, software, developer'},
    //   {name: 'description', content: 'Con 4 años de experiencia desarrollando sistemas, interfaces, bots y soluciones tecnológicas  para hacer de la web un lugar mejor. En mi trabajo me gusta liderar, proponer y ejecutar ideas, escribir y refactorizar código limpio, reutilizable y escalable.'},
    // ]);

    // Inicializar partículas globales después de un breve delay
    // setTimeout(() => {
    //   this.particlesService.init();
    // }, 100);
  }

  // private initLenis(): void {
  //   this.lenis = new Lenis({
  //     duration: 1.2,
  //     easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  //     gestureOrientation: 'vertical',
  //     smoothWheel: true,
  //     syncTouch: false
  //   });

  //   // Función de animación
  //   const raf = (time: number) => {
  //     this.lenis.raf(time);
  //     requestAnimationFrame(raf);
  //   };
  //   requestAnimationFrame(raf);
  // }

  // ngOnDestroy(): void {
  //   if (this.lenis) {
  //     this.lenis.destroy();
  //   }

  //   // Destruir partículas
  //   this.particlesService.destroy();
  // }

  // onSplashAnimationCompleted(): void {
  //   this.appContentVisible = true;
    
  //   // Inicializar Lenis después de que el contenido sea visible
  //   setTimeout(() => {
  //     this.initLenis();
  //   }, 100);
    
  //   // Iniciar animaciones de los componentes
  //   this.loadingService.startAnimations();
  // }

}
