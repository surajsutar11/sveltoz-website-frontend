import { Component } from '@angular/core';

@Component({
  selector: 'app-automation-digital',
  standalone: false,
  templateUrl: './automation-digital.component.html',
  styleUrl: './automation-digital.component.scss'
})
export class AutomationDigitalComponent {
 automationDigitalTransformation = [
  {
    title: "Robotic Process Automation (RPA) – UiPath, Power Automate",
    description:
      "Automate repetitive tasks to enhance efficiency and reduce errors."
  },
  {
    title: "Business Workflow Automation",
    description:
      "Streamline operations and improve productivity with intelligent workflow solutions."
  },
  {
    title: "Intelligent Document Processing (IDP)",
    description:
      "Digitize, extract, and process data from complex documents using AI."
  },
  {
    title: "IoT Platform Integration",
    description:
      "Connect devices and data for smarter, real-time operational visibility."
  },
  {
    title: "AI-driven Predictive Maintenance",
    description:
      "Minimize downtime by predicting equipment issues before they occur."
  },
  {
    title: "Legacy System Modernization",
    description:
      "Transform outdated systems into agile, scalable digital platforms."
  }
];

}
