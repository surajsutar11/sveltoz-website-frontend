import { Component } from '@angular/core';

@Component({
  selector: 'app-enterprise-software',
  standalone: false,
  templateUrl: './enterprise-software.component.html',
  styleUrl: './enterprise-software.component.scss'
})
export class EnterpriseSoftwareComponent {
enterpriseSolutions = [
    {
      icon: 'fa-solid fa-layer-group',
      title: 'Full-Stack Development (.NET Core + Angular)',
      description:
        'Create robust, modern web applications using enterprise-grade Microsoft technologies.'
    },
    {
      icon: 'fa-solid fa-cloud',
      title: 'Cloud-Native & Microservices Architecture',
      description:
        'Build scalable systems designed for flexibility, reliability, and continuous delivery.'
    },
    {
      icon: 'fa-solid fa-link',
      title: 'API Development & System Integration',
      description:
        'Connect and unify enterprise systems for seamless information flow across applications.'
    },
    {
      icon: 'fa-solid fa-building',
      title: 'Custom ERP / CRM Application Development',
      description:
        'Develop tailored business applications that streamline processes and improve efficiency.'
    },
    {
      icon: 'fa-solid fa-arrow-up-right-dots',
      title: 'Application Modernization & Migration',
      description:
        'Upgrade legacy platforms into modern, high-performance digital ecosystems.'
    },
    {
      icon: 'fa-solid fa-gears',
      title: 'DevOps & CI/CD Automation',
      description:
        'Implement automated workflows that speed up software delivery while maintaining quality and security.'
    }
  ];
}
