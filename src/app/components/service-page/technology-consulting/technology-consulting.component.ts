import { Component } from '@angular/core';

@Component({
  selector: 'app-technology-consulting',
  standalone: false,  
  templateUrl: './technology-consulting.component.html',
  styleUrl: './technology-consulting.component.scss'
})
export class TechnologyConsultingComponent {
 technologyConsulting = [
  {
    title: "IT Strategy & Roadmap Design",
    description:
      "Align technology investments with business goals through expert consulting."
  },
  {
    title: "Solution Architecture Consulting",
    description:
      "Design scalable, secure, and future-proof technology ecosystems."
  },
  {
    title: "Product Design & MVP Development",
    description:
      "Rapidly bring innovative ideas to market with agile MVPs and prototypes."
  },
  {
    title: "Technology Feasibility & PoC Development",
    description:
      "Validate emerging technologies through structured proof-of-concept initiatives."
  },
  {
    title: "Digital Maturity Assessment",
    description:
      "Evaluate and elevate your organization’s readiness for digital transformation."
  },
  {
    title: "Innovation Labs & Emerging Tech R&D",
    description:
      "Experiment with frontier technologies to stay ahead of the innovation curve."
  }
];

}
