import { Component } from '@angular/core';

@Component({
  selector: 'app-drone-developement',
  standalone: false,
  templateUrl: './drone-developement.component.html',
  styleUrl: './drone-developement.component.scss'
})
export class DroneDevelopementComponent {
 droneSolutions = [
    {
      icon: 'fa-solid fa-gears',
      title: 'Custom Drone Design & Engineering',
      description:
        'Build drones tailored to industry-specific needs, from hardware to software optimization.'
    },
    {
      icon: 'fa-solid fa-microchip',
      title: 'Drone Software + Hardware Integration',
      description:
        'Combine smart hardware and AI-based software for seamless flight performance and control.'
    },
    {
      icon: 'fa-solid fa-bullseye',
      title: 'AI-Powered Object Detection & Tracking',
      description:
        'Enable drones to autonomously identify, track, and analyze objects in real time.'
    },
    {
      icon: 'fa-solid fa-industry',
      title: 'Industrial Drone Applications (Inspection, Logistics, Defense)',
      description:
        'Deploy drones for safety inspections, logistics automation, and defense operations.'
    },
    {
      icon: 'fa-solid fa-leaf',
      title: 'Agricultural Drone Solutions (Crop Monitoring, Yield Analysis)',
      description:
        'Use drones for precision farming, real-time crop insights, and yield optimization.'
    },
    {
      icon: 'fa-solid fa-cloud',
      title: 'Drone Data Processing & Cloud Connectivity',
      description:
        'Process aerial data with cloud integration for analytics, reporting, and decision-making.'
    }
  ];
}
