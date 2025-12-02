import { Component } from '@angular/core';

@Component({
  selector: 'app-quality-assurance',
  standalone: false,
  templateUrl: './quality-assurance.component.html',
  styleUrl: './quality-assurance.component.scss'
})
export class QualityAssuranceComponent {
qaTestingServices = [
  {
    title: "Manual & Automated Testing (Selenium, Cypress, Playwright)",
    description:
      "Validate software accuracy and usability through advanced automation."
  },
  {
    title: "API & Performance Testing",
    description:
      "Test system reliability, response time, and integration stability under varying loads."
  },
  {
    title: "Regression, Functional & UAT Testing",
    description:
      "Guarantee flawless functionality and seamless user experience before production rollout."
  },
  {
    title: "Continuous Testing in CI/CD Pipelines",
    description:
      "Integrate automated QA into development pipelines for rapid, ongoing validation."
  },
  {
    title: "Test Strategy Consulting & QA Process Automation",
    description:
      "Optimize QA strategy and automate repetitive testing workflows for speed and accuracy."
  },
  {
    title: "Security & Compliance Testing",
    description:
      "Protect data integrity and meet regulatory standards with advanced vulnerability assessments."
  }
];
}
